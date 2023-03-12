<script lang="ts">
  import classNames from 'classnames';
  import { beforeNavigate, afterNavigate } from '$app/navigation';
  import Swiping from '$lib/components/swipe/Swiping.svelte';
  import Nav, { type NavItem } from '$lib/shared/navigate';
  import NavbarMenu from './NavbarMenu.svelte';
  import NavbarWrapper from './NavbarWrapper.svelte';
  import ToggleMenu from './components/ToggleMenu.svelte';
  import Waiting from './components/Waiting.svelte';
  import type { Custom } from '.';

  let className: any = undefined;
  export { className as class };

  export let custom: Custom = {};

  export let links: NavItem[];
  export let scope = Nav.map(links, true);
  export let paging = false;

  export let duration = 300;

  let hidden = true;
  let close = () => (hidden = true);
  let toggle = () => (hidden = !hidden);

  let disabled = false;

  const handleKey = (ev: KeyboardEvent) => {
    if (ev.key === 'Escape' && !hidden) {
      ev.preventDefault();
      ev.stopPropagation();
      close();
    }
  };

  beforeNavigate(() => {
    disabled = true;
    close();
  });

  afterNavigate(() => setTimeout(() => (disabled = false), 500));
</script>

<svelte:body on:keydown={handleKey} />

{#if scope.length}
  <Swiping
    {scope}
    {paging} />
{/if}

<NavbarWrapper
  let:scrolled
  class={className}
  {close}
  {disabled}
  {duration}>
  <slot name="before" />

  <Waiting
    class="ml-auto text-gray-400"
    {disabled} />

  <NavbarMenu
    class={custom.menu}
    classLink={custom.link}
    {links}
    {hidden}
    {duration}>
    <slot {scrolled} {close} />
  </NavbarMenu>

  <slot name="after" />

  <ToggleMenu
    class={classNames('lg:hidden ml-4', custom.button)}
    {hidden}
    {toggle} />
</NavbarWrapper>
