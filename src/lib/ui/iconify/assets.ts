//@ts-nocheck
import { DEV } from 'esm-env';
import { addCollection } from '@iconify/svelte/offline';

import bundles from './bundles.json';
bundles.forEach((bundle: any) => addCollection(bundle));

const custom = [];

// import './custom/...';

export default custom;

DEV && console.debug('CSR iconify');
