<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';
  import Figure from '$lib/shared/figure/Figure.svelte';
  import type { DataImage } from '$lib/types';
  import type { Custom } from '.';

  export let dataset: DataImage[];

  let className: any = undefined;
  export { className as class };

  export let custom: Custom = {};
  custom.caption = classNames('pt-2 flex flex-col', custom.caption);

  export let nativ = false;

  if (!nativ) onMount(() => document?.lazyload.update());
</script>

<div class={className}>
  {#each dataset as data}
    <Figure
      {data}
      class={classNames('flex flex-col', custom.item)}
      {custom}
      {nativ} />
    {#if !nativ}
      <link
        rel="image"
        href={data.src} />
    {/if}
  {/each}
</div>
