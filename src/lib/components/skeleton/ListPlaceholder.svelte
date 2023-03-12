<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';

  let className: any = 'max-w-md';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  let render = false;
  onMount(() => (render = true));
</script>

{#if render}
  <div
    class={classNames(
      'p-5 space-y-4 rounded',
      'border border-current divide-y divide-current shadow',
      animate,
      className
    )}
    aria-hidden="true"
    role="status">
    {#each Array(5) as idx}
      <div
        class="flex justify-between items-center pt-4 first:pt-0"
        aria-rowindex={idx}>
        <div>
          <div class="h-2.5 rounded-full bg-current opacity-40 w-24 mb-2.5" />
          <div class="w-32 h-2 rounded bg-current" />
        </div>
        <div class="h-2.5 rounded-full bg-current  opacity-70 w-12" />
      </div>
    {/each}
    <span class="sr-only">Loading...</span>
  </div>
{/if}
