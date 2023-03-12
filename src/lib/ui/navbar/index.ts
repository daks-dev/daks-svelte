interface Custom {
    menu?: any;
    link?: any;
    button?: any;
    icon?: any;
  }

export type { Custom };

export { default as NavbarMenu } from './NavbarMenu.svelte';
export { default as NavbarWrapper } from './NavbarWrapper.svelte';

import Navbar from './Navbar.svelte';
export default Navbar;
