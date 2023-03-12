interface Custom {
  item?: any;
  image?: any;
  caption?: any;
  button?: any;
  progress?: any;
}

type Easing = (x: any) => any;

type Tweening = (ms?: number) => {
  duration: number;
  delay: number;
  easing: Easing;
};

type Show = number | ((x: number) => number);

type Controls = string | string[];

type Loaded = undefined | ((x?: Event | HTMLElement) => void);

export type { Custom, Show, Easing, Tweening, Controls, Loaded };

import Carousel from './Carousel.svelte';
export default Carousel;
