import fs from 'fs';
import { resolve, extname } from 'path';

const extnames = ['.avif', '.webp', '.png', '.jpg', '.jpeg'];

export const variants = (width = 320) => ({
  gallery: {
    sources: 'webp',
    squares: `w=${width}&h=${width}&webp`,
    screens: `w=${width}&h=${(width * 9) / 16}&webp`
  },
  sources: {
    dataset: 'webp'
  },
  squares: {
    dataset: `w=${width}&h=${width}&webp`
  },
  screens: {
    dataset: `w=${width}&h=${(width * 9) / 16}&webp`
  }
});

function async(path: string, res: string[], variant: object): string[] {
  const str: string[] = [];
  Object.entries(variant).forEach(([key, val]) => {
    str.push(`export const ${key} = async () => [`);
    res.forEach((el, i) =>
      str.push(`(await import('./${el}?${val}')).default${i < res.length - 1 ? ',' : ''}`)
    );
    str.push('];');
  });
  fs.writeFileSync(`${path}/images.async.ts`, str.join(`\n`));
  return res;
}

function sync(path: string, res: string[], variant: object): string[] {
  const str: string[] = [];
  Object.entries(variant).forEach(([key, val]) => {
    str.push(`const ${key}: any[] = [];`);
    res.forEach((el, i) => {
      const idx = i.toString().padStart(5, '0');
      str.push(`import ${key}_${idx} from './${el}?${val}';`);
      str.push(`${key}.push(${key}_${idx});`);
    });
    str.push(`export { ${key} };`);
  });
  fs.writeFileSync(`${path}/images.ts`, str.join(`\n`));
  return res;
}

export const generate = (
  dir: string,
  variant?: object,
  limit = 0,
  total = true,
  self = true,
  recursive = true
): string[] => {
  const path = resolve(process.cwd(), 'src', dir);
  let count = 0;
  const res: string[] = [];
  fs.readdirSync(path).forEach((el) => {
    if (fs.lstatSync(`${path}/${el}`).isDirectory() && recursive)
      generate(`${dir}/${el}`, total ? variant : undefined, limit).forEach((file) =>
        res.push(`${el}/${file}`)
      );
    else if (extnames.includes(extname(el)) && (!limit || count++ < limit)) res.push(el);
  });
  if (variant && self) {
    sync(path, res, variant);
    async(path, res, variant);
  }
  return res;
};

generate.index = (
  dir: string,
  variant: object,
  limit = 0
) => generate(dir, variant, limit, false);

generate.entry = (
  dir: string,
  variant: object
) => generate(dir, variant, 0, true, false);


export default {
  variants,
  generate
};
