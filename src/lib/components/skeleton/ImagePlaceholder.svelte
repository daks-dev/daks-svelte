<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';

  let className: any = '';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  export let size = '48';

  let render = false;
  onMount(() => (render = true));
</script>

{#if render}
  <div
    class={classNames(
      'space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center',
      animate,
      className
    )}
    aria-hidden="true"
    role="status">
    <div
      class="
        relative overflow-hidden
        flex justify-center items-center w-full sm:w-96 h-48 max-h-full rounded
        before:absolute before:inset-0 before:bg-current before:opacity-25">
      <svg
        width={size}
        height={size}
        viewBox="0 0 640 512"
        fill="currentColor">
        <path
          d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
      </svg>
    </div>
    <div class="grid grid-cols-10 gap-y-2.5 w-full">
      <div class="h-2.5 rounded-full bg-current col-span-3 mb-1.5" />
      <div class="h-2 rounded bg-current col-span-8" />
      <div class="h-2 rounded bg-current col-span-full" />
      <div class="h-2 rounded bg-current col-span-6" />
      <div class="h-2 rounded bg-current col-span-7" />
      <div class="h-2 rounded bg-current col-span-5" />
    </div>
    <span class="sr-only">Loading...</span>
  </div>
{/if}
