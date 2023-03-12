<script lang="ts">
  import { YandexMetrikaHit, Icon } from '$lib';

  const title = 'DAKS • SVELTE';
  const description = 'DAKS: npm packege for SVELTE';

  const year = new Date().getFullYear();
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main class="content justify-around grow">
  <div class="content flex flex-col items-center gap-4p">
    <a
      rel="noreferrer nofollow"
      class="opacity-50 hover:opacity-100 hover:scale-110
             transition-all duration-300 ease-in-out"
      href="//www.npmjs.com/package/daks-svelte"
      target="_blank">
    <h1 class="mb-8 text-3xl">Welcome to your library project</h1>
    </a>

    <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>

    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <a
      rel="noreferrer nofollow"
      class="mt-8
             opacity-50 hover:opacity-100 text-slate-500 hover:text-slate-300 hover:scale-110
             transition-all duration-300 ease-in-out"
      href="//github.com/daks-dev/daks-svelte"
      target="_blank"
      aria-label="github">
      <Icon
        icon="line-md:github-loop"
        class="w-[20vmin] h-[20vmin]">
        {year} &star; DAKS DEV
      </Icon>
    </a>
  </div>
</main>
