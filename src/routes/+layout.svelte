<script lang="ts">
  import { BROWSER } from 'esm-env';
  import {
    lazyload,
    YandexMetrikaInit,
    RouteTransition,
    Footer,
    NavbarKit,
    ScreenBlock
  } from '$lib';

  import '$iconify';
  import '../app.css';

  import type { PageData } from './$types';
  export let data: PageData;

  import { app, nav } from '$configs';

  // && window.matchMedia('(prefers-color-scheme: dark)').matches
  if (BROWSER) {
    if (!('color-theme' in localStorage)) {
      localStorage.setItem('color-theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    document.lazyload ??= lazyload();
  }
</script>

<svelte:head>
  <meta
    name="theme-color"
    content={app.themeColor} />
  <meta
    name="msapplication-TileColor"
    content={app.tileColor} />
  <meta
    name="application-name"
    content={app.shortName} />
  <meta
    name="apple-mobile-web-app-title"
    content={app.shortName} />
</svelte:head>

<RouteTransition
  class="flex flex-col grow"
  referesh={data.referesh}
  mode={1}>
  <slot />
</RouteTransition>

<Footer {...nav.footer} />

<NavbarKit
  {...nav.navbar}
  centered />

<ScreenBlock duration={process.env.APP_SCREEN_BLOCK} />

<YandexMetrikaInit />
