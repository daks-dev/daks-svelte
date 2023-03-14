<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import { page, navigating } from '$app/stores';
  import { counter } from '.';
  import type { Timeout } from '$lib/types';

  export let robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  export let title: string;
  export let description: string;
  export let canonical =
    process.env.APP_CANONICAL &&
    `${new URL(process.env.APP_CANONICAL).origin}${$page.url.pathname}`;

  // const counter = process.env.YA_COUNTER ?? '';

  if (BROWSER && counter) {
    let interval: Timeout;
    const referer = $navigating?.from?.url.href;
    const hit = () =>
      (interval = setInterval(() => {
        if (typeof ym !== 'undefined') {
          ym(counter, 'hit', $page.url.href, { title: title, referer: referer });
          clearInterval(interval);
        }
      }, 75));

    onMount(() => (hit(), () => clearInterval(interval)));
  }
</script>

<svelte:head>
  {#if robots}
    <meta
      name="robots"
      content={robots} />
  {/if}
  <title>{title}</title>
  <meta
    name="description"
    content={description} />
  {#if canonical}
    <link
      rel="canonical"
      href={canonical} />
  {/if}
</svelte:head>
