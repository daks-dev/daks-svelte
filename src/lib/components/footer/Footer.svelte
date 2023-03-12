<script lang="ts">
  import classNames from 'classnames';
  import { Link, Nav, type NavItem } from '$lib/shared';
  import time from './store';

  let className: any = 'bg-neutral-200/50 dark:bg-inherit';
  export { className as class };

  export let copylink: undefined | NavItem = undefined;
  export let links: undefined | NavItem[] = undefined;

  const year = new Date().getFullYear();
  const timer = new Intl.DateTimeFormat('ru', {
    minute: '2-digit',
    second: '2-digit'
  });
</script>

<footer
  id="footer"
  class={classNames('pt-4 pb-2', className)}>
  <div
    class="
      wrapper
      flex flex-row justify-between items-center
      leading-loose font-mono font-thin text-2xs xs:text-xs sm:text-sm sm:tracking-wide text-gray-500">
    {#if copylink}
      <Link
        class="pr-4 mr-auto hover:text-sky-500"
        {...Nav.props(copylink)}>
        <span slot="before">&copy;{year}</span>
      </Link>
    {:else}
      <Link
        class="pr-4 mr-auto hover:text-sky-500"
        label="custom:svelte-logo"
        href="//kit.svelte.dev"
        size="18">
        Svelte Kit
      </Link>
    {/if}

    <slot />

    {#if links?.length}
      <nav class="flex flex-wrap items-center mx-4">
        {#each links as link}
          <Link
            class="px-4 text-right hover:text-sky-500"
            {...Nav.props(link)}
            size="18" />
        {/each}
      </nav>
    {/if}

    <div class="pl-4 text-slate-400">
      {timer.format($time)}
    </div>
  </div>
</footer>
