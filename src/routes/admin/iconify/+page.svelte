<script lang="ts">
  import { DEV } from 'esm-env';
  import AppHead from '$lib/app/AppHead.svelte';
  import Icon from '$lib/ui/iconify/Icon.svelte';
  import Bundle from './Bundle.svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  let waiting = false;
  $: iconset = {};

  const upload = async () => {
    waiting = true;
    const response = await fetch('/admin/iconify/upload');
    if (response.ok) {
      iconset = await response.json();
    } else alert('Ошибка HTTP: ' + response.status);
    setTimeout(() => (waiting = false), 300);
  };

  const robots = 'noindex, follow';
  const title = 'DAKS • Admin [ Iconify ]';
</script>

<AppHead
  {robots}
  {title} />

<main>
  <header class="content flex items-center gap-x-4">
    <a
      class="
        text-slate-500 hover:text-sky-600 hover:scale-125
        transition duration-300 ease-in-out"
      href="/admin">
      <Icon
        class="w-12 h-12 drop-shadow-md"
        icon="ic:outline-settings" />
    </a>
    <h1 class="title grow">Iconify</h1>
    <a
      rel="noreferrer nofollow"
      class="w-24 sm:w-32 hover:scale-110
             transition-all duration-300 ease-in-out"
      href="https://github.com/daks-dev/daks.git"
      target="_blank">
      <img
        class="w-full h-auto"
        src="/icons/github.svg"
        alt="GitHUB" />
    </a>
  </header>

  {#if DEV}
    <div class="content flex justify-start items-center mb-8">
      <button
        on:click|preventDefault={upload}
        type="button"
        class="px-3 py-2 mx-2 border-2 rounded"
        disabled={waiting}>
        UPLOAD
      </button>
      {#if waiting}
        <Icon
          icon="svg-spinners:180-ring-with-bg"
          class="w-8 h-8" />
      {:else}
        {#each Object.entries(iconset) as [key, val]}
          <div class="px-2">
            <i class="font-mono text-xl text-slate-500">{key}</i> : {val}
          </div>
        {/each}
      {/if}
    </div>
  {/if}

  <div class="content divide-y divide-dotted">
    {#if data.custom.length}
      <Bundle
        prefix="custom"
        icons={data.custom} />
    {/if}
    {#each data.bundles as { prefix, icons }}
      <Bundle
        {prefix}
        icons={Object.keys(icons)} />
    {/each}
  </div>
</main>
