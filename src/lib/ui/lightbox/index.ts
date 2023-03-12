interface Options {
  behaviour?: Behaviour;
  swipe?: boolean;
  wheel?: boolean;
  clickableClose?: boolean;
  buttonClose?: boolean;
  buttonFullscreen?: boolean;
  enableKeyboard?: boolean;
  bodyScroll?: boolean;
  duration?: number;
}

interface Custom {
  overlay?: any;
  header?: any;
  footer?: any;
}

interface Item {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

type Behaviour = '' | 'hide' | 'loop';

type Status =
  | undefined
  | {
      countItems: number;
      activeItem: number;
    };

type Loader = undefined | (() => void);

export type { Options, Custom, Item, Behaviour, Status, Loader };

export { default as Lightbox } from './Lightbox.svelte';
export { default as LightboxList } from './LightboxList.svelte';
export { default as LightboxModal } from './LightboxModal.svelte';
export { default as LightboxThumbnail } from './LightboxThumbnail.svelte';
