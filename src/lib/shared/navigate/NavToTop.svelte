<script lang="ts">
  import classNames from 'classnames';
  import { fade } from 'svelte/transition';
  import { sineIn, sineOut } from 'svelte/easing';
  import Icon from '$lib/ui/iconify/Icon.svelte';
  import { toTop } from '$lib/utils/scroll';

  let className: any = undefined;
  export {className as class};

  export let scrolled: boolean;
  export let size: number | string = '1.75em';
  export let duration = 300;
  export let speed = duration * 5;

  const handleClck = () => toTop({duration: speed});
</script>

{#if scrolled}
  <button
    in:fade={{
      duration,
      easing: sineIn
    }}
    out:fade={{
      duration,
      easing: sineOut
    }}
    on:click|preventDefault={handleClck}
    class={classNames(
      'absolute z-10 flex top-full',
      'opacity-50 hover:opacity-100',
      'transition ease-in-out',
      className
    )}
    style:transition-duration={`${duration}ms`}>
    <Icon
      class="pointer-events-none"
      icon="mdi:transfer-up"
      {size} />
  </button>
{/if}
