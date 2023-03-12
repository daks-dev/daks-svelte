import { resolve } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import pluginImagetools from './src/lib/vite/plugin-imagetools';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  logLevel: 'error', // 'info'
  plugins: [pluginImagetools(), sveltekit()],
  // server: { fs: { strict: false } },
  resolve: {
    alias: {
      'daks-svelte': resolve(process.cwd(), './src/lib')
    }
  },
  define: {
    'process.env': process.env
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
};

export default config;
