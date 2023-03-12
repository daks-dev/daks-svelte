<script lang="ts">
  import { page } from '$app/stores';
  import Link from '$lib/shared/link/Link.svelte';
  import Icon from '$lib/ui/iconify/Icon.svelte';

  let className: undefined | string = undefined;
  export {className as class};

  export let brand: undefined | string = undefined;
  export let icons: { home: string; page: string } = {
    home: 'line-md:home-simple-twotone',
    page: 'line-md:home-simple'
  };
  export let size: number | string = '1.25em';
  export let alt = 'Главная';
</script>

<Link
  class={className}
  href="/">
  {#if brand}
    <img
      src={brand}
      width={size}
      height={size}
      {alt} />
  {:else}
    <Icon
      class="pointer-events-none"
      icon={$page.url.pathname === '/' ? icons.home : icons.page}
      {size}>
      {alt}
    </Icon>
  {/if}
</Link>
