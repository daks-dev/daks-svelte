<script lang="ts">
  import classNames from 'classnames';
  import chevronSvg from './chevron.svg';
  import type { Options } from '..';

  export let options: Options;

  export let next: boolean = false;

  export let countItems: number;
  export let activeItem: number;

  $: disabled =
    options.behaviour !== 'loop' && (next ? activeItem === countItems - 1 : activeItem === 0);
</script>

<button
  on:click|preventDefault|stopPropagation
  {disabled}
  class={classNames(
    'absolute z-20 inset-y-0',
    'hidden items-center',
    next ? 'right-0 justify-end' : 'left-0 justify-start',
    'w-1/5 md:w-1/6 xl:w-1/12',
    'text-gray-200/50 hover:text-white disabled:text-black',
    'lg:bg-black/25 hover:bg-black/50 active:bg-transparent',
    'hover:cursor-pointer'
  )}
  class:xs:flex={!disabled || options.behaviour !== 'hide'}>
  <span
    class="
      p-2 linecap-round linejoin-round text-5xl
      hover:scale-125 transition-all duration-300 ease-in"
    class:rotate-180={!next}>
    {@html chevronSvg}
  </span>
</button>
