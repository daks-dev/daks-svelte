interface Custom {
  image?: any;
  caption?: any;
}

type Loaded = undefined | ((x?: Event | HTMLElement) => void);

export type { Custom, Loaded };

import Figure from './Figure.svelte';
export default Figure;
