<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte/offline';

  let className: undefined | string = undefined;
  export { className as class };

  export let icon: string;

  export let size: undefined | number | string = undefined;
  export let width = size;
  export let height = size;

  export let inline: undefined | boolean = undefined;
  export let hFlip: undefined | boolean = undefined;
  export let vFlip: undefined | boolean = undefined;
  export let flip: undefined | string = undefined;
  export let rotate: undefined | number | string = undefined;
  export let color: undefined | string = undefined;
  export let onLoad: undefined | (() => void) = undefined;

  export let role: undefined | string = 'image';
  export let label: undefined | string = undefined;
  export let hidden: undefined | boolean = undefined;

  let render = false;

  onMount(() => (render = true));
</script>

{#if render}
  {#key icon}
    <Icon
      class={className}
      {icon}
      {width}
      {height}
      {inline}
      {hFlip}
      {vFlip}
      {flip}
      {rotate}
      {color}
      {onLoad}
      aria-label={label}
      aria-hidden={hidden}
      {role} />
  {/key}
{:else}
  <slot />
{/if}
