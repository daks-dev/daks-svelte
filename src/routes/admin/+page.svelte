<script lang="ts">
  import { DEV } from 'esm-env';
  import AppHead from '$lib/app/AppHead.svelte';
  import SvelteKit from '$lib/components/svelte-kit/SvelteKit.svelte';

  const robots = 'noindex, follow';
  const title = 'DAKS • Admin';
</script>

<AppHead
  {robots}
  {title} />

<main>
  <header class="content flex items-center gap-8">
    {#if DEV}
      <h1 class="title grow">Admin</h1>
    {:else}
      <div class=" grow">
        <h1 class="title mb-4">SvelteKit</h1>
        <h4 class="font-semibold text-gray-400">tailwindcss</h4>
      </div>
    {/if}
    <a
      rel="noreferrer nofollow"
      class="
        w-24 sm:w-32 drop-shadow-md hover:drop-shadow-deep hover:scale-105
        transition duration-300 ease-in-out"
      href="https://github.com/daks-dev/daks-skm"
      target="_blank">
      <img
        class="w-full h-auto"
        src="/icons/github.svg"
        alt="GitHUB"
        decoding="async"
        loading="lazy" />
    </a>
  </header>

  {#if DEV}
    <div class="content flex flex-col gap-16 items-center text-3xl">
      <a
        class="button px-3 py-2 mx-2 border-2 rounded"
        href="/admin/iconify">
        Iconify
      </a>
    </div>
  {:else}
    <SvelteKit class="content items-center" />
  {/if}
</main>
