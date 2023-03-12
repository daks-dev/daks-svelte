<script lang="ts">
  import classNames from 'classnames';
  import Carousel, { type Custom, type Loaded } from '$lib/ui/carousel';
  import type { DataImage } from '$lib/types';

  let className: any = undefined;
  export { className as class };
  export let custom: Custom = {};

  export let dataset: DataImage[];

  export let check = false;
  let checked = 0;
  const loaded: Loaded = () => checked++;

  export let grayscale = false;
  export let invert = false;

  custom.item = classNames(custom.item, {
    'group': grayscale || invert
  });
  custom.image = classNames(custom.image, {
    'grayscale group-hover:grayscale-0': grayscale,
    'invert group-hover:invert-0': invert
  });
</script>

<Carousel
  class={className}
  {custom}
  {dataset}
  {loaded}
  {...$$restProps}>
  <svelte:fragment slot="check">
    {#if check}
      <div class="relative font-semibold text-black/50">
        <span class="absolute bottom-full left-2 mb-2">{checked} <sup>{dataset.length}</sup></span>
      </div>
    {/if}
  </svelte:fragment>
</Carousel>
