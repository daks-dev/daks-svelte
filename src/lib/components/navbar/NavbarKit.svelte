<script lang="ts">
  import classNames from 'classnames';
  import Nav, { NavHome, NavToTop, type NavItem } from '$lib/shared/navigate';
  import Navbar, { type Custom } from '$lib/ui/navbar';
  import ColorTheme from '$lib/ui/color-theme';
  import { YandexSearchToggle } from '$lib/ui/yandex/search';

  let className: any = `
    bg-neutral-50 dark:bg-inherit
    onscroll:bg-neutral-50/95 dark:onscroll:bg-slate-700/95
    shadow-sm dark:shadow-md onscroll:shadow-lg`;
  export { className as class };

  export let custom: Custom = {};
  custom = Object.assign(
    {
      menu: `
        text-slate-500 dark:text-slate-400 onscroll:text-slate-500
        -lg:bg-neutral-50/95 -lg:dark:bg-slate-700/95`,
      link: `
        hover:text-sky-500 dark:hover:text-sky-300
        hover:bg-gray-500/50 lg:hover:bg-transparent
        page:text-cyan-700 step:text-slate-800 dark:step:text-slate-300`,
      button: `
        p-2
        text-slate-500 hover:text-slate-800
        dark:text-slate-400 dark:hover:text-slate-200
        disabled:text-gray-500`,
      icon: `
        p-2
        text-cyan-600 hover:text-sky-500 dark:hover:text-sky-300`
    },
    custom
  );

  export let links: NavItem[];
  export let scope = Nav.map(links, true);
  export let paging = false;

  export let duration = 300;
  export let centered = false;
  export let size: number | string = 24;
  export let brand: undefined | string = undefined;
</script>

<Navbar
  let:close
  let:scrolled
  class={className}
  {custom}
  {links}
  {scope}
  {paging}
  {duration}>
  <NavHome
    slot="before"
    class={custom.button}
    {size}
    {brand} />

  <svelte:fragment slot="after">
    <ColorTheme
      class={classNames('ml-4', centered ? 'lg:ml-auto' : 'lg:ml-8', custom.button)}
      {size} />

    <YandexSearchToggle
      class={classNames('ml-4', custom.button)}
      callback={close}
      {size}
      {duration} />

    <NavToTop
      class="
      p-2 mt-2
      hover:bg-slate-500/50
      text-slate-800 dark:text-slate-200
      rounded-full"
      {scrolled} />
  </svelte:fragment>
</Navbar>
