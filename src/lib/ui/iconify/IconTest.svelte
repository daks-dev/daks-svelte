<script lang="ts">
  import Icon from './Icon.svelte';
  import { isIcon } from '.';

  let className: undefined | string = undefined;
  export { className as class };

  export let icon: undefined | string = undefined;
  export let size: undefined | number | string = undefined;
  export let width = size;
  export let height = size;
</script>

{#if icon}
  {#if isIcon(icon)}
    <Icon
      class={className}
      {icon}
      {width}
      {height}>
      <slot />
    </Icon>
  {:else}
    {@html icon}
  {/if}
{:else}
  <slot />
{/if}
