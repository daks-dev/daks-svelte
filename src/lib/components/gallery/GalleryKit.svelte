<script lang="ts">
  import classNames from 'classnames';
  import Gallery, { type Custom } from '$lib/ui/gallery';
  import type { DataImage } from '$lib/types';

  let className: any = undefined;
  export { className as class };

  export let custom: Custom = {};

  export let dataset: DataImage[] = [];

  export let nativ = false;

  export let grid = false;
  export let adaptive = false;
  export let centered = false;
  export let rounded = false;
  export let shadow = false;
  export let scale = false;
  export let grayscale = false;
  export let invert = false;
</script>

<Gallery
  {dataset}
  class={classNames(
    {
      'grid grid-cols-none': grid,
      'flex flex-wrap': !grid,
      'justify-center': centered
    },
    className
  )}
  custom={{
    item: classNames(custom.item, {
      'items-center': centered
    }),
    image: classNames(custom.image, {
      'w-full max-w-full h-auto object-contain': adaptive,
      rounded,
      'shadow-md hover:shadow-lg': shadow,
      'shadow-slate-700 hover:shadow-slate-800': shadow,
      'dark:shadow-slate-400 dark:hover:shadow-slate-500': shadow,
      'hover:scale-105': scale,
      'grayscale hover:grayscale-0': grayscale,
      'invert hover:invert-0': invert,
      'transition-all duration-500 ease-in-out': shadow || scale || grayscale || invert
    }),
    caption: classNames(custom.caption, {
      'text-center': centered,
      'mt-4': (shadow || scale) && adaptive,
      'mt-2': (shadow || scale) && !adaptive
    })
  }}
  {nativ} />
