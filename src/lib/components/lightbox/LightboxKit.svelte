<script lang="ts">
  import classNames from 'classnames';
  import {
    LightboxList,
    LightboxModal,
    LightboxThumbnail,
    type Options,
    type Custom,
    type Loader
  } from '$lib/ui/lightbox';
  import Sign from '$lib/components/sign/Sign.svelte';
  import Figure from '$lib/shared/figure/Figure.svelte';
  import type { DataImage } from '$lib/types';

  let className: any = undefined;
  export { className as class };

  export let images: DataImage[];
  export let thumbnails: DataImage[];

  export let nativ = false;

  export let grid = false;
  export let adaptive = false;
  export let centered = false;
  export let rounded = false;
  export let shadow = false;
  export let scale = false;
  export let grayscale = false;
  export let invert = false;

  export let custom: Custom = {};

  export let options: Options = {};
  options = Object.assign({ behaviour: 'loop' }, options);

  export let loader: Loader = () => document?.lazyload.update();

  export let sign: any = undefined;
  if (sign === true) sign = {
    icon: 'ic:round-zoom-out-map',
    dark: true
  };
</script>

<LightboxList
  class={classNames(
    {
      'grid grid-cols-none ': grid,
      'flex flex-wrap': !grid,
      'justify-center': centered
    },
    className
  )}
  {custom}
  {options}
  {loader}
  {...$$restProps}>
  <svelte:fragment slot="thumbnail">
    {#each thumbnails as data, idx}
      <LightboxThumbnail
        class={classNames(sign && 'relative group')}>
        {#if sign}
          <Sign {...sign} />
        {/if}
        <Figure
          {data}
          class={classNames('flex flex-col', {
            'items-center': centered
          })}
          custom={{
            image: classNames({
              'w-full max-w-full h-auto object-contain': adaptive,
              rounded,
              'drop-shadow-deep hover:drop-shadow-hard': shadow,
              'hover:scale-105': scale,
              'grayscale hover:grayscale-0': grayscale,
              'invert hover:invert-0': invert,
              'transition duration-500 ease-in-out': shadow || scale || grayscale || invert
            }),
            caption: classNames('pt-2 flex flex-col', {
              'text-center': centered,
              'mt-4': (shadow || scale) && adaptive,
              'mt-2': (shadow || scale) && !adaptive
            })
          }}
          {nativ} />
        <link
          rel="image"
          href={images[idx].src} />
        <link
          rel="thumbnailUrl"
          href={thumbnails[idx].src} />
      </LightboxThumbnail>
    {/each}
  </svelte:fragment>
  {#each images as { src, width, height, title, subtitle, description }, idx}
    <LightboxModal
      {title}
      {subtitle}
      {description}>
      <img
        class="bg-no-repeat bg-center bg-1/10 bg-loading"
        {src}
        {width}
        {height}
        alt=""
        decoding="async"
        loading="lazy" />
    </LightboxModal>
  {/each}
</LightboxList>
