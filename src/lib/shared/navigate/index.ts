interface NavItem {
  href?: string;
  label?: string;
  target?: string;
  title?: string;
  rel?: string;
  itemprop?: string;
  role?: string;
  handle?: (x?: Event) => any;
  base?: string;
  disallow?: boolean;
  style?: string;
  links?: NavItem[];
}

interface NavSite {
  navbar: {
    links: NavItem[];
    scope?: string[];
    brand?: string;
  };
  footer: {
    links?: NavItem[];
    copylink?: NavItem;
  };
  allow?: string[];
}

export type { NavItem, NavSite };

export { default as NavHome } from './NavHome.svelte';
export { default as NavToTop } from './NavToTop.svelte';

import Nav from './Nav';
export default Nav;
