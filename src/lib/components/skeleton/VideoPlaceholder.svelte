<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';

  let className: any = 'max-w-sm h-56';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  export let size = '48';

  let render = false;
  onMount(() => (render = true));
</script>

{#if render}
  <div
    class={classNames(
      'relative overflow-hidden',
      'flex justify-center items-center rounded-lg',
      'before:absolute before:inset-0 before:bg-current before:opacity-25',
      animate,
      className
    )}
    aria-hidden="true"
    role="status">
    <svg
      width={size}
      height={size}
      viewBox="0 0 384 512"
      fill="currentColor">
      <path
        d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
{/if}
