<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';

  let className: any = '';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  let render = false;
  onMount(() => (render = true));
</script>

{#if render}
  <div
    class={classNames(
      'grid grid-cols-10 gap-y-2.5 justify-center items-center',
      animate,
      className
    )}
    aria-hidden="true"
    role="status">
    <div class="h-2.5 rounded-full bg-current col-span-full" />
    <div class="h-2.5 rounded-full bg-current col-span-8 col-start-2" />
    <div class="col-span-full flex justify-center items-center mt-1.5">
      <svg
        class="w-10 h-10 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" />
      </svg>
      <div class="w-20 h-2.5 rounded-full bg-current mr-3" />
      <div class="w-24 h-2 rounded bg-current opacity-50" />
    </div>
    <span class="sr-only">Loading...</span>
  </div>
{/if}
