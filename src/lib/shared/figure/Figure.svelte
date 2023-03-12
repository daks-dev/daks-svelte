<script lang="ts">
  import classNames from 'classnames';
  import placeholder from '$lib/assets/icons/placeholder';
  import type { DataImage } from '$lib/types';
  import type { Custom, Loaded } from '.';

  export let data: DataImage;
  const { src, width, height, title, subtitle, description } = data;
  const caption = title || subtitle || description;

  let className: any = undefined;
  export { className as class };

  export let custom: Custom = {};

  let space: undefined | number = undefined;
  export { space as width };

  export let nativ = false;
  export let loaded: Loaded = undefined;
  const handleLoad = nativ && loaded ? (ev: Event) => loaded?.call(ev) : undefined;

  export let alt = caption?.toLowerCase() || '';
</script>

<figure
  class={classNames('relative', className)}
  style:width={space && `${space}px`}>
  <img
    on:load={handleLoad}
    class={classNames(
      !nativ && 'bg-no-repeat bg-center bg-1/5 bg-loading',
      'bg-neutral-300',
      custom.image
    )}
    class:lazy={!nativ}
    src={nativ ? src : placeholder}
    data-src={nativ ? undefined : src}
    {width}
    {height}
    {alt}
    decoding="async"
    loading="lazy" />
  {#if caption}
    <figcaption class={classNames('flex flex-col', custom.caption)}>
      {#if title}
        <span class="font-semibold">{@html title}</span>
      {/if}
      {#if subtitle}
        <span>{@html subtitle}</span>
      {/if}
      {#if description}
        <small>{@html description}</small>
      {/if}
    </figcaption>
  {/if}
</figure>
