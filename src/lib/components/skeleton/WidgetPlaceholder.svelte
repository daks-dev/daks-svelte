<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';

  let className: any = 'max-w-sm';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  let render = false;
  onMount(() => (render = true));
</script>

{#if render}
  <div
    class={classNames('p-5 rounded border border-current shadow', animate, className)}
    aria-hidden="true"
    role="status">
    <div class="h-2.5 rounded-full bg-current w-32 mb-2.5" />
    <div class="mb-10 w-48 h-2 rounded-full bg-current" />
    <div class="flex items-baseline mt-4 space-x-6">
      <div class="w-full h-72 rounded-t-lg bg-current opacity-50" />
      <div class="w-full h-56 rounded-t-lg bg-current" />
      <div class="w-full h-72 rounded-t-lg bg-current opacity-50" />
      <div class="w-full h-64 rounded-t-lg bg-current" />
      <div class="w-full h-80 rounded-t-lg bg-current opacity-50" />
      <div class="w-full h-72 rounded-t-lg bg-current" />
      <div class="w-full h-80 rounded-t-lg bg-current opacity-50" />
    </div>
    <span class="sr-only">Loading...</span>
  </div>
{/if}
