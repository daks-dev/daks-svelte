<script lang="ts">
  import { linear, sineInOut, quadInOut } from 'svelte/easing';
  import {
    YandexMetrikaHit,
    Carousel,
    BagePlaceholder,
    ImagePlaceholder,
    Skeleton,
    TextPlaceholder,
    VideoPlaceholder
  } from '$lib';
  import type { SvelteComponent } from 'svelte';

  import { gallery } from '$lib';
  const dataset = gallery.screens;

  // import type { PageData } from './$types';
  // export let data: PageData;

  let innerWidth: number;
  const show = (x: number) =>
    (x < 480 && 1) || (x < 1024 && 2) || (x < 1280 && 3) || (x < 1560 && 4) || 5;

  let ratio = 0;
  $: getRatio = () => {
    switch (ratio) {
      case 1:
        return 1;
      case 2:
        return 4 / 3;
      case 3:
        return 16 / 9;
      case 4:
        return 620 / 877;
      case 5:
        return 877 / 620;
      default:
        return undefined;
    }
  };
  $: getRatioName = () => {
    switch (ratio) {
      case 1:
        return '1:1';
      case 2:
        return '4:3';
      case 3:
        return '16:9';
      case 4:
        return 'A4';
      case 5:
        return 'A4 albom';
      default:
        return 'none';
    }
  };

  let count = 0;
  let duration = 3000;
  let delay = 2000;

  let easing = 0;
  $: getEasing = () => {
    switch (easing) {
      case 1:
        return sineInOut;
      case 2:
        return linear;
      default:
        return quadInOut;
    }
  };
  $: getEasingName = () => {
    switch (easing) {
      case 1:
        return 'sineInOut';
      case 2:
        return 'linear';
      default:
        return 'quadInOut';
    }
  };

  let lazyload = false;

  let stream = false;
  let autoplay = false;
  let progress = true;

  let carousel0: SvelteComponent;
  let carousel1: SvelteComponent;
  const start = () => {
    autoplay || (stream = false);
    if (stream) {
      duration = 7000;
      delay = 0;
      easing = 2;
    }
    carousel0?.start();
    carousel1?.start();
  };
  const reset = () => {
    carousel0?.reset(0);
    carousel1?.reset(0);
  };

  const title = 'DAKS • Carousel';
  const description = 'DAKS: carousel';
</script>

<svelte:window bind:innerWidth />

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content mb-8">
    <h1 class="title">Carousel</h1>
  </header>

  <div class="content mb-4 flex gap-4">
    <label>
      <input
        bind:checked={stream}
        on:change={start}
        type="checkbox"
        disabled={!autoplay} />
      stream
    </label>
    <label>
      <input
        bind:checked={autoplay}
        on:change={start}
        type="checkbox"
        disabled={stream} />
      autoplay
    </label>
    <label>
      <input
        bind:checked={lazyload}
        on:change={start}
        type="checkbox" />
      lazyload
    </label>
    <label>
      <input
        bind:checked={progress}
        type="checkbox" />
      progress
    </label>
  </div>

  <div
    class="
        content mb-4
        grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <label class="flex flex-col">
      duration: {duration / 1000} sec
      <input
        bind:value={duration}
        type="range"
        min="1000"
        max="20000"
        step="1000"
        list="duration" />
      <datalist id="duration">
        {#each Array(20) as val, key}
          <option value={(key + 1) * 1000} />
        {/each}
      </datalist>
    </label>
    <label class="flex flex-col">
      delay: {@html stream ? '&mdash;' : `${delay / 1000} sec`}
      <input
        bind:value={delay}
        type="range"
        min="0"
        max="10000"
        step="1000"
        list="delay"
        disabled={stream} />
      <datalist id="delay">
        {#each Array(11) as val, key}
          <option value={key * 1000} />
        {/each}
      </datalist>
    </label>
    <label class="flex flex-col">
      easing: {getEasingName()}
      <input
        bind:value={easing}
        type="range"
        min="0"
        max="2"
        step="1"
        list="easing"
        disabled={stream} />
      <datalist id="easing">
        {#each Array(3) as val, key}
          <option value={key} />
        {/each}
      </datalist>
    </label>
  </div>

  <div
    class="
      content mb-16
      grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <label class="flex flex-col">
      count: {count || 'auto'}
      <input
        bind:value={count}
        on:change={reset}
        type="range"
        min="0"
        max="5"
        step="1"
        list="count" />
      <datalist id="count">
        {#each Array(6) as val, key}
          <option value={key} />
        {/each}
      </datalist>
    </label>
    <label class="flex flex-col">
      aspect ratio: {getRatioName()}
      <input
        bind:value={ratio}
        type="range"
        min="0"
        max="5"
        step="1"
        list="ratio" />
      <datalist id="ratio">
        {#each Array(6) as val, key}
          <option value={key} />
        {/each}
      </datalist>
    </label>
  </div>

  <Carousel
    bind:this={carousel0}
    class="content mb-16"
    {dataset}
    show={count || show}
    ratio={getRatio()}
    {duration}
    {delay}
    nativ={!lazyload}
    easing={getEasing()}
    controls="play move wheel"
    {progress}
    {stream}
    {autoplay} />

  <Carousel
    bind:this={carousel1}
    let:width
    let:ratio
    class="content"
    show={count || show}
    ratio={getRatio()}
    {duration}
    {delay}
    nativ={!lazyload}
    easing={getEasing()}
    controls="play move"
    {progress}
    {stream}
    {autoplay}>
    {#each Array(10) as val, key}
      <div
        class="bg-cyan-600/25 odd:bg-cyan-300/25"
        style:width="{width}px">
        <div class="h-full flex items-center py-4 px-5">
          {#if key === 1}
            <Skeleton class="w-full" />
          {:else if key === 3}
            <ImagePlaceholder class="w-full  h-full" />
          {:else if key === 5}
            <TextPlaceholder class="w-full" />
          {:else if key === 7}
            <VideoPlaceholder class="w-full h-full" />
          {:else if key === 9}
            <BagePlaceholder class="w-full" />
          {:else}
            <span class="mx-auto"
              >#&nbsp;{key} [{width.toFixed(2)}] {ratio ? `(${ratio.toFixed(2)})` : ''}</span>
          {/if}
        </div>
      </div>
    {/each}
  </Carousel>
</main>
