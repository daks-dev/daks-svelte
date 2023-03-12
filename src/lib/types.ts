// declare global {}

type Timeout = undefined | string | number | NodeJS.Timeout;

interface Caption {
  title?: string;
  subtitle?: string;
  description?: string;
}

interface ImageMeta {
  src: string;
  width?: number;
  height?: number;
}

type DataImage = ImageMeta & Caption;

export type { Timeout, Caption, ImageMeta, DataImage };

export type { LazyLoad } from './app/lazyload';

export type { NavItem, NavSite } from './shared/navigate';
