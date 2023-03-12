<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '$lib/ui/iconify/Icon.svelte';

  let className: undefined | string = undefined;
  export { className as class };

  export let icons = [
    // 'ic:twotone-dark-mode', 'ic:twotone-light-mode'
    'line-md:sunny-outline-to-moon-loop-transition', 'line-md:moon-to-sunny-outline-loop-transition'
  ];
  export let size: number | string = '1.25em';

  let dark: boolean;
  const toggle = () => {
    dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', dark ? 'dark' : 'light');
  };

  onMount(() => (dark = document.documentElement.classList.contains('dark')));
</script>

<!--svelte:head>
  <script>
    if (window) {
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    }
  </script>
</svelte:head-->

<button
  on:click={toggle}
  class={className}
  type="button"
  aria-haspopup="true"
  aria-expanded="false"
  aria-labelledby="">
  <Icon
    class="pointer-events-none"
    icon={icons[dark ? 1 : 0]}
    {size} />
</button>
