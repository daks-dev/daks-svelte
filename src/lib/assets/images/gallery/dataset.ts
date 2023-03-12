import type { ImageMeta, Caption, DataImage } from '$lib/types';
import { sources, squares, screens } from './images'
import * as async from './images.async'

const captions: Caption[] = [0, 1, 2, 3, 4, 5, 6, 7].reduce(
  (res, key) => (
    (res[key] = {
      title: '*** '.repeat(Math.random() * 8 + 1).trim(),
      subtitle: '------- '.repeat(Math.random() * 16 + 1).trim(),
      description: '............... '.repeat(Math.random() * 24 + 1).trim()
    }),
    res
  ),
  Array(0)
);

const generate = async (fn: () => Promise<ImageMeta[]> ): Promise<DataImage[]> =>
  (await fn()).reduce(
    (res, val, key) => ((res[key] = Object.assign(val, captions[key])), res),
    Array(0)
  );

export default {
  async,
  sources,
  squares,
  screens,
  captions,
  generate
};
