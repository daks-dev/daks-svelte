<!--script
  context="module"
  lang="ts">
  const set = new Set();

  export function brake() {
    set.forEach(() => true);
  }
</script-->

<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { linear, quadInOut } from 'svelte/easing';
  import Figure from '$lib/shared/figure/Figure.svelte';
  import ButtonMove from './components/ButtonMove.svelte';
  import ButtonPlay from './components/ButtonPlay.svelte';
  import { swipe, wheel } from '$lib/utils';
  import lazyload, { type LazyLoad } from '$lib/app/lazyload';
  import type { Timeout, DataImage } from '$lib/types';
  import type { Custom, Show, Easing, Controls, Loaded } from '.';

  let className: any = undefined;
  export { className as class };

  export let custom: Custom = {};
  custom = Object.assign(
    {
      button: 'text-slate-400/70 hover:text-white/70 disabled:text-gray-700/50 hover:bg-black/50',
      progress: 'bottom-full opacity-50'
    },
    custom
  );

  export let dataset: DataImage[] = [];
  let total = dataset.length;

  export let show: Show = (x: number) => (x < 480 && 1) || (x < 1024 && 2) || 3;
  export let ratio: undefined | number = undefined;

  export let stream = false;

  export let duration = stream ? 7000 : 3000;
  export let delay = stream ? 0 : 2000;
  export let easing: Easing = stream ? linear : quadInOut;

  export let autoplay = stream;
  export let pause = 500;

  export let controls: Controls = ['move', 'play'];
  const control = (x: string, cb?: () => void): boolean => {
    const res = controls.indexOf('all') > -1 || controls.indexOf(x) > -1;
    res && cb?.call(null);
    return res;
  };

  export let progress = false;

  export let nativ = false;
  export let loaded: Loaded = undefined;

  let auto = autoplay;

  let innerWidth: number;
  $: count = typeof show === 'function' ? show(innerWidth) : show;

  let carousel: HTMLElement;
  $: width = carousel?.clientWidth / count;

  let __timeout: Timeout;
  const timeout = (cb?: () => void, ms = pause): void => {
    if (cb) ms ? (__timeout = setTimeout(cb, ms)) : cb();
    else clearTimeout(__timeout);
  };

  let step = 0;
  let wait = false;

  const tweening = (ms?: number) => {
    return {
      duration: ms ?? (auto ? duration : pause),
      delay: auto ? delay : 0,
      easing
    };
  };
  const tween = tweened(0, tweening());

  const set = (val: number, cb: () => void, ms?: number): void => {
    step = val;
    wait = true;
    tween.set(step, tweening(ms)).then(cb);
  };

  export const next = (): void => {
    if (step < total - count) set(++step, play);
    else auto ? timeout(() => play(false), pause) : reset();
  };

  export const prev = (): void => {
    if (step) set(--step, () => play(false));
    else timeout(play, auto ? delay : 0);
  };

  export const play = (forward = true): void => {
    wait = false;
    auto && (forward ? next() : prev());
  };

  export const stop = (): void => set(step, () => (wait = false), pause);

  export const toogle = (): void => {
    auto = !auto;
    auto ? play() : stop();
  };

  const actionSwipe = (delta: { x: number; h: boolean; v: boolean }): void => {
    if (!auto && delta.h && !delta.v) delta.x > 0 ? prev() : next();
  };

  const actionWheel = (delta: {y: number}): void => {
    if (!auto) {
      delta.y > 0 && next();
      delta.y < 0 && prev();
    }
  };

  export const reset = (ms = pause): void => set(0, play, ms);

  const resize = () => {
    width = carousel?.clientWidth / count;
    step + count > total && set((step = total - count), play, 0);
  };

  let observer: ResizeObserver;
  let loader: LazyLoad;
  export const start = () => {
    observer ??= new ResizeObserver(resize);
    observer.observe(carousel);
    if (!nativ)
      loader
        ? loader.update()
        : (loader = lazyload({
            container: carousel,
            callback_loaded: (el) => loaded?.call(el)
          }));
    (auto = autoplay) && timeout(play, pause);
  };

  let slider: HTMLElement;
  onMount(() => {
    //carousel.addEventListener('wheel', handleWheel);
    total ||= slider.children.length;
    start();
    return timeout;
  });
</script>

<svelte:window bind:innerWidth />

<div class={classNames(className)}>
  <div class="relative w-full">
    <div
      bind:this={carousel}
      use:swipe={actionSwipe}
      use:wheel={control('wheel') ? actionWheel : undefined}
      class={classNames(
        'w-full overflow-x-hidden',
        'select-none',
        auto || wait ? 'cursor-wait' : 'cursor-ew-resize'
      )}>
      <div
        bind:this={slider}
        class="
          relative
          grid grid-rows-1 grid-flow-col
          will-change-transform"
        class:overflow-x-hidden={ratio}
        style:height={ratio ? `${width / ratio}px` : ''}
        style:width="{width * total}px"
        style:transform="translate3d(-{width * $tween}px, 0px, 0px)">
        {#each dataset as data}
          <Figure
            class={custom.item}
            custom={{
              image: classNames(
                'w-full max-w-full',
                ratio ? 'h-full object-cover' : 'h-auto object-contain',
                'pointer-events-none',
                custom.image
              ),
              caption: custom.caption
            }}
            {width}
            {data}
            {nativ}
            {loaded} />
        {/each}
        <slot
          {ratio}
          {total}
          {count}
          {auto}
          {wait}
          {step}
          {width}
          {tween}
          {next}
          {prev}
          {toogle}
          {control} />
      </div>
    </div>

    <slot name="check" />

    <slot name="control">
      {#if control('move') && !auto}
        <ButtonMove
          on:click={next}
          class={custom.button}
          disabled={auto || wait || undefined}
          flip />
      {/if}
      {#if control('play')}
        <ButtonPlay
          on:click={toogle}
          class={custom.button}
          {auto} />
      {/if}
      {#if control('move') && !auto}
        <ButtonMove
          on:click={prev}
          class={custom.button}
          disabled={auto || wait || !step || undefined} />
      {/if}
    </slot>

    {#if progress}
      <slot name="progress">
        <progress
          class={classNames('absolute z-10 left-0 w-full h-1', custom.progress)}
          value={$tween / (total - count)} />
      </slot>
    {/if}
  </div>
</div>
