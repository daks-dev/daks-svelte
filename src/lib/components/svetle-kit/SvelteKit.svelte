<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';
  import { sineIn } from 'svelte/easing';
  import { spring } from 'svelte/motion';
  import { blur } from 'svelte/transition';
  import Icon from '$lib/ui/iconify/Icon.svelte';
  import placeholder from '$lib/assets/icons/placeholder';
  import image from '$lib/assets/images/svelte/kit.machine.webp?w=512&webp';
  import { svelteKitCount as count } from '$lib/stores';

  let className: string = '';
  export { className as class };

  const increment = () => count.update((value) => ++value);
  const decrement = () => count.update((value) => --value);

  const displayed_count = spring();
  $: displayed_count.set($count);
  const modulo = (n: number, m: number) => ((n % m) + m) % m;
  $: offset = modulo($displayed_count, 1);

  let render = false;
  onMount(() => (render = true));
</script>

<div class={classNames('flex flex-col', className)}>
  {#if render}
    <a
      in:blur={{
        duration: 1200,
        delay: 300,
        easing: sineIn
      }}
      on:introstart={() => document?.lazyload.update()}
      rel="noreferrer nofollow"
      href="//kit.svelte.dev/"
      target="_blank">
      <img
        class="
          lazy
          hover:drop-shadow-deep
          transition duration-300 ease-in-out"
        src={placeholder}
        data-src={image.src}
        width={image.width}
        height={image.height}
        alt=""
        decoding="async"
        loading="lazy" />
    </a>
  {/if}

  <div
    class="
      -mt-16
      flex items-center
      border-t-2 border-b-2 border-slate-200">
    <button
      class="
      w-32 h-full
      flex items-center justify-center
      text-5xl text-slate-500 hover:text-7xl hover:text-red-700
      transition-all duration-300 ease-in-out"
      aria-label="Уменьшить счётик"
      on:click={decrement}>
      <Icon
        class="drop-shadow-deep"
        icon="ic:round-minus" />
    </button>

    <div class="relative w-28 h-20 pt-0.5 overflow-hidden">
      <div
        class="absolute w-full h-full text-7xl align-middle text-center font-semibold
            text-zinc-500 dark:text-zinc-300"
        style="transform: translate(0, {100 * offset}%)">
        <div
          class="absolute w-full h-full select-none top-full"
          aria-hidden="true">
          {Math.floor($displayed_count + 1)}
        </div>
        <div class="absolute w-full h-full">
          {Math.floor($displayed_count)}
        </div>
      </div>
    </div>

    <button
      class="
      w-32 h-full
      flex items-center justify-center
      text-5xl text-slate-500 hover:text-7xl hover:text-green-700
      transition-all duration-300 ease-in-out"
      aria-label="Увеличить счётик"
      on:click={increment}>
      <Icon
        class="drop-shadow-deep"
        icon="ic:round-plus" />
    </button>
  </div>
</div>
