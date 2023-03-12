<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Select } from '$lib';

  const title = 'DAKS • Dropdown Select';
  const description = 'DAKS: dropdown select';

  onMount(() => document?.lazyload?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title mb-2">Select</h1>
  </header>

  <section class="content">
    <h1 class="mb-8 text-2xl">Select...</h1>
    <Select />
  </section>
</main>
