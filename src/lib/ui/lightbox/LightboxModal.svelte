<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  export let title = '';
  export let subtitle = '';
  export let description = '';

  const activeItemStore: Writable<number> = getContext('activeItem');

  const id = (getContext('counterItems') as Function)({
    title,
    subtitle,
    description
  });
</script>

{#if $activeItemStore === id}
  <slot {...$$restProps} />
{/if}
