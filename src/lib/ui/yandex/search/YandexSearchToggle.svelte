<script lang="ts">
  import classNames from 'classnames';
  import { fly } from 'svelte/transition';
  import { sineInOut } from 'svelte/easing';
  import { page } from '$app/stores';
  import Icon from '$lib/ui/iconify/Icon.svelte';
  import outside from '$lib/utils/outside';
  import { uuid } from '$lib/utils/math';
  import YandexSearchForm from './YandexSearchForm.svelte';

  let className: any = undefined;
  export { className as class };
  let classModal: any = 'bg-inherit rounded-lg drop-shadow-lg'; //  'bg-neutral-50/95 dark:bg-slate-700/95 rounded-lg drop-shadow-lg';

  export let duration = 300;
  export let size: number | string = '1.25em';

  export let callback: undefined | (() => void) = undefined;

  let hidden = true;

  const options = {
    y: -128,
    duration,
    easing: sineInOut
  };

  const id = uuid();

  const close = () => (hidden = true);

  const toggle = () => {
    callback?.call(null);
    hidden = !hidden;
  };

  const handleKey = (ev: KeyboardEvent) => {
    if (ev.key === 'Escape' && !hidden) {
      ev.preventDefault();
      ev.stopPropagation();
      close();
    }
  };

  $: disabled = $page.url.pathname.indexOf('/search') === 0 || undefined;
</script>

<button
  use:outside.withnext={close}
  on:click={toggle}
  on:keydown={handleKey}
  class={classNames(className)}
  type="button"
  {disabled}
  aria-label="toggle search"
  aria-haspopup={!hidden}
  aria-expanded={!hidden}
  aria-controls={id}>
  <Icon
    class="pointer-events-none"
    icon={`ic:round-search${hidden && !disabled ? '' : '-off'}`}
    {size} />
</button>

{#if !hidden}
  <div
    in:fly={options}
    out:fly={options}
    class={classNames(
      'absolute z-40 top-full left-1/2 -translate-x-1/2',
      'w-full max-w-xs xs:max-w-md sm:max-w-xl lg:max-w-3xl mt-4 py-8 px-4 sm:px-8',
      classModal
    )}
    {id}>
    <YandexSearchForm
      button
      callback={close} />
  </div>
{/if}
