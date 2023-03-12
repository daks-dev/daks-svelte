<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';

  let className: any = undefined;
  export { className as class };

  export let tag = 'div';

  export let id: number = (getContext('counterThumbnails') as Function)();

  const openImage: (id: number) => void = getContext('openImage');
</script>

<svelte:element
  this={tag}
  on:click={() => openImage(id)}
  class={classNames('lightbox-thumbnail cursor-zoom-in', className)}
  {...$$restProps}>
  <slot />
</svelte:element>
