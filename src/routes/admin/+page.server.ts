import { DEV } from 'esm-env';
import { imagetools } from '$lib/server';

const { generate, variants } = imagetools;

DEV && generate('lib/assets/images/gallery', variants().gallery);

// import type { PageServerLoad } from './$types';
// export const load: PageServerLoad = async () => {};
