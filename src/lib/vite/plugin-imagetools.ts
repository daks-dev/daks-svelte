import { extname } from 'path';
import type { Plugin } from 'vite';
import { imagetools } from 'vite-imagetools';

const extensions = ['.avif', '.webp', '.png', '.jpg', '.jpeg'];

export default (quality: number = 90): Plugin =>
  imagetools({
    defaultDirectives: (url) => {
      const extension = extname(url.pathname);
      return new URLSearchParams(
        extensions.includes(extension)
          ? {
              quality: quality.toString(),
              fit: 'cover',
              background: 'transparent',
              meta: 'src;width;height'
            }
          : undefined
      );
    }
  });
