<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';

  let className: any = 'max-w-lg';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  let render = false;
  onMount(() => (render = true));
</script>

{#if render}
  <div
    class={classNames('space-y-2.5', animate, className)}
    aria-hidden="true"
    role="status">
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-2" />
      <div class="h-2.5 rounded-full bg-current col-span-2" />
      <div class="h-2.5 rounded-full bg-current col-span-5" />
    </div>
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current col-span-5" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-5" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-1" />
    </div>
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-3" />
      <div class="h-2.5 rounded-full bg-current col-span-2" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-3" />
    </div>
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current col-span-4" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-5" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-" />
    </div>
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-3" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-2" />
      <div class="h-2.5 rounded-full bg-current col-span-4" />
    </div>
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-4" />
      <div class="h-2.5 rounded-full bg-current col-span-2" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-4" />
    </div>
    <span class="sr-only">Loading...</span>
  </div>
{/if}
