<script lang="ts">
  import { YandexMetrikaHit } from '$lib';

  const title = 'DAKS • DEBUG';
  const description = 'DAKS: debug';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">DEBUG</h1>
  </header>

  <ul class="content space-y-4 list-['\25B7']">
    {#each Array(99) as val, key}
      <li class="first-letter:pl-2">{key <9 ? '0': ''}{key + 1} ...</li>
    {/each}
  </ul>
</main>
