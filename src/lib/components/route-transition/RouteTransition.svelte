<script lang="ts">
  import { blur, fly } from 'svelte/transition';
  import { sineIn, sineOut } from 'svelte/easing';
  import { navigating } from '$app/stores';
  import modeStore from './store';

  let className: undefined | string = undefined;
  export { className as class };

  export let referesh!: string;
  export let mode: undefined | string | number = undefined;
  export let tag = 'div';

  const duration = 500;
  const delay = 100;

  if (typeof mode !== 'undefined') $modeStore = Number(mode);

  const transition = $modeStore ? fly : blur;
  const options = () => {
    if ($navigating?.to?.url.pathname !== '/')
      switch ($modeStore) {
        case 3:
          return {
            in: {
              x: -512,
              duration,
              delay,
              easing: sineIn
            },
            out: {
              x: 512,
              duration: delay * 2,
              easing: sineOut
            }
          };
        case 2:
          return {
            in: {
              y: 384,
              duration,
              delay,
              easing: sineIn
            },
            out: {
              y: -384,
              duration: delay * 2,
              easing: sineOut
            }
          };
        case 1:
          return {
            in: {
              y: -384,
              duration,
              delay,
              easing: sineIn
            },
            out: {
              y: 384,
              duration: delay * 2,
              easing: sineOut
            }
          };
      }
    return {
      in: {
        duration,
        delay,
        amount: 5,
        easing: sineIn
      },
      out: {
        duration: delay * 2,
        easing: sineOut
      }
    };
  };
</script>

{#key referesh}
  <svelte:element
    this={tag}
    in:transition={options().in}
    out:transition={options().out}
    class={className}>
    <slot />
  </svelte:element>
{/key}
