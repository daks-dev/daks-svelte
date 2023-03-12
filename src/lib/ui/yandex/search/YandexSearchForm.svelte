<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Icon from '$lib/ui/iconify/Icon.svelte';
  import { beep } from '$lib/utils/audio';

  let className: any = undefined;
  export { className as class };
  export let custom: { input?: any; button?: any } = {};

  export let reload = false;
  export let reverse = false;
  export let button = true;
  export let callback: null | (() => void) = null;

  const searchid = process.env.YA_SEARCHID;

  let form: HTMLFormElement;
  let text: null | string;

  $: validation = () => {
    const val = text?.trim();
    return !!val && val !== $page.url.searchParams.get('text');
  };

  const submit = () => {
    if (searchid) {
      const search = new URLSearchParams({
        searchid: searchid,
        l10n: 'ru',
        reqenc: '',
        text: text ? text.trim() : ''
      }).toString();
      goto(`/search?${search}`, { noScroll: true });
    } else {
      beep(250, 200, 50);
      return false;
    }
  };

  const handleSubmit = (ev: Event) => {
    ev.preventDefault();
    if (validation()) {
      reload ? form.submit() : submit();
      callback && callback();
    } else beep(250, 100, 50);
  };

  onMount(() => (text = $page.url.searchParams.get('text')));
</script>

<form
  bind:this={form}
  on:submit={handleSubmit}
  id="ya-site-form"
  class={classNames('flex flex-row justify-between items-start gap-3', className)}
  class:flex-row-reverse={button && reverse}
  action="/search"
  method="get">
  <input
    type="hidden"
    name="searchid"
    value={searchid} />
  <input
    type="hidden"
    name="l10n"
    value="ru" />
  <input
    type="hidden"
    name="reqenc"
    value="" />
  <div class="relative grow">
    <input
      bind:value={text}
      class={classNames(
        'w-full py-0.5 px-2',
        'text-slate-700 bg-slate-200 rounded',
        'focus:bg-white focus:outline-none',
        custom.input
      )}
      class:text-red-800={!validation()}
      type="search"
      name="text" />
    <div
      class={classNames(
        'absolute py-0.5 px-2',
        text ? 'bottom-full' : 'bottom-0 opacity-80',
        'font-semibold text-gray-500 first-letter:text-red-700',
        'transition-all duration-500 ease-in-out'
      )}
      class:right-0={reverse}>
      Яндекс
    </div>
    {#if callback}
      <div
        on:click|preventDefault={callback}
        on:keypress
        role="button"
        tabindex="-1"
        class={classNames(
          'absolute right-0 py-0.5 px-2',
          text ? 'bottom-full bg-transparent' : 'bottom-0 bg-gray-400 opacity-80',
          'font-semibold text-gray-500 hover:text-red-800',
          'cursor-pointer',
          'transition-all duration-500 ease-in-out'
        )}
        class:right-auto={reverse}>
        Esc
      </div>
    {/if}
  </div>
  {#if button}
    <button
      on:click={handleSubmit}
      class={classNames(
        'text-sky-600 hover:text-sky-300 disabled:!text-gray-500/50',
        custom.button
      )}
      type="button"
      disabled={!validation()}>
      <Icon
        icon="wpf:search"
        class="h-7 w-7"
        hFlip={!reverse} />
    </button>
  {/if}
</form>
