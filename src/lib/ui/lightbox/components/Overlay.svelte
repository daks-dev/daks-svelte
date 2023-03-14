<script lang="ts">
  import classNames from 'classnames';
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import { swipe, wheel } from '$lib/utils';
  import type { Custom, Options } from '..';

  const dispatch = createEventDispatcher();

  export let custom: Custom;
  export let fullscreen: boolean;
  export let options: Options;

  const handleKey = (event: KeyboardEvent) => {
    if (options.enableKeyboard)
      switch (event.key) {
        case 'Escape': {
          dispatch('close');
          break;
        }
      }
  };

  const actionSwipe = options.swipe
    ? (delta: { x: number; h: boolean; v: boolean }): void => {
        if (options.swipe && delta.h && !delta.v) dispatch(delta.x > 0 ? 'previous' : 'next');
      }
    : undefined;

  const actionWheel = options.wheel
    ? (delta: { y: number }): void => {
        if (options.wheel) {
          delta.y > 0 && dispatch('next');
          delta.y < 0 && dispatch('previous');
        }
      }
    : undefined;

  const handleClick = () => options.clickableClose && dispatch('close');

  let node: HTMLElement;
  let anchor: HTMLElement;
  onMount(() => {
    anchor = document.createElement('div');
    document.body.appendChild(anchor);
    anchor.appendChild(node);
  });
  onDestroy(() => typeof document !== 'undefined' && document.body.removeChild(anchor));
</script>

<svelte:window on:keydown={handleKey} />

<div
  bind:this={node}
  in:fade={{ duration: options.duration }}
  out:fade={{ duration: options.duration && options.duration / 2 }}
  use:swipe={actionSwipe}
  use:wheel={actionWheel}
  on:click={handleClick}
  on:keypress
  class={classNames(
    'fixed z-[999] left-0 top-0 max-w-full max-h-screen w-full h-screen overflow-hidden',
    'flex justify-center items-center',
    'bg-black/90 clear-pseudo select-none',
    'overflow--offset',
    custom.overlay
  )}
  class:hover:cursor-zoom-out={options.clickableClose}
  role="button"
  tabIndex="0">
  <div
    on:click|preventDefault|stopPropagation={() => false}
    on:keypress
    class={classNames('max-h-inherit flex flex-col', fullscreen && 'w-inherit h-inherit')}
    role="button"
    tabIndex="0">
    <slot />
  </div>
</div>
