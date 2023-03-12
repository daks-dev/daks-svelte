export const isIcon = (val?: string) => val && /^[a-z,\-]+:[a-z,\-]+$/.test(val);

export { default as IconTest } from './IconTest.svelte';

import Icon from './Icon.svelte';
export default Icon;
