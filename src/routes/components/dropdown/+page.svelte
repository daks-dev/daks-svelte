<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Dropdown, DropdownWrapper, scroll } from '$lib';
  import type { NavItem } from '$lib/types';


  const items: NavItem[] = [
    { label: 'Link', href: './#' },
    { label: 'Button', handle: () => setTimeout(() => alert('Handle 0'), 300) },
    { label: 'Link 80', href: '#__78' },
    {
      label: 'Button 80',
      handle: () => setTimeout(() => scroll.toObj('#__80', { offset: -45, duration: 3000 }))
    }
  ];

  const title = 'DAKS • Dropdown';
  const description = 'DAKS: dropdown';

  onMount(() => document?.lazyload?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Dropdown</h1>
  </header>

  <div
    id="dropdown"
    class="content flex justify-center gap-8 mb-16 uppercase">
    <Dropdown
      let:id
      let:hidden
      class="px-4 py-2 rounded-md shadow-md shadow-black"
      label="Dropdown 0">
      <DropdownWrapper
        {id}
        {hidden}
        class="
          mt-1
          bg-neutral-50/95 dark:bg-slate-700/95
          shadow-lg shadow-gray-600 lg:shadow-none lg:drop-shadow-md
          rounded-md focus:outline-none"
        classLink="
          py-2 px-4 
          hover:text-sky-500 dark:hover:text-sky-300
          hover:bg-gray-500/50"
        {items} />
    </Dropdown>
    <Dropdown
      label="Dropdown 1"
      {items} />
  </div>

  <div class="content space-y-8">
    {#each Array(99) as val, key}
      <div id="__{key}">{key} {val || '...'}</div>
    {/each}
  </div>
</main>
