import { DEV } from 'esm-env';
//import { dev } from '$app/environment';
//export const csr = dev;
export const prerender = !DEV;

import bundles from '$iconify/bundles.json';
import custom from '$iconify';

import type { PageLoad } from './$types';
export const load: PageLoad = ({ /* parent, data, url */ }) => {
  // await parent();
  // const { ... } = data;
  return {
    // referesh: url.pathname,
    bundles,
    custom
  };
};
