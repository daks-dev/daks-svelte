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
    class={classNames(
      'w-full p-5 rounded-md shadow',
      'border border-current divide-y divide-current',
      animate,
      className
    )}>
    <slot />
    <div class="flex space-x-4">
      <div class="h-10 w-10 rounded-full bg-current" />
      <div class="flex-1 space-y-5">
        <div class="h-2.5 rounded-full bg-current" />
        <div class="space-y-2.5 opacity-50">
          <div class="grid grid-cols-3 gap-x-2 gap-y-2.5">
            <div class="h-2 rounded bg-current col-span-2" />
            <div class="h-2 rounded bg-current col-span-1" />
          </div>
          <div class="h-2 rounded bg-current" />
        </div>
      </div>
    </div>
  </div>
{/if}
