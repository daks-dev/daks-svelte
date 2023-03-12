<script lang="ts">
  import { BROWSER } from 'esm-env';
  import classNames from 'classnames';
  import { onMount } from 'svelte';
  import { uuid } from '$lib/utils/math';
  import type { Timeout } from '$lib/types';

  let className: any = 'w-full h-[50vh] border-t-4 border-slate-400';
  export { className as class };

  export let data: any;
  data.options = Object.assign(
    {
      // avoidFractionalZoom: false,
      // options.suppressMapOpenBlock: true
    },
    data.options
  )

  export let tag = 'div';

  const id = uuid();

  const lang = process.env.APP_LANG ?? 'ru_RU';
  const apikey = process.env.YA_API_MAPS;

  if (apikey) {
    const upload = () => typeof ymaps !== 'undefined' && ymaps?.Map && ymaps?.Placemark;

    // map.events.add('actiontick', () => state = map.action.getCurrentState());
    // console.log(state.zoom, state.globalPixelCenter);

    let interval: Timeout;
    const mount = () => {
      interval = setInterval(() => {
        if (upload()) {
          const points = new ymaps.Map(id, data.state, data.options).geoObjects;
          data.locations?.forEach((location: any) => {
            points.add(
              new ymaps.Placemark(location.geometry, location.properties, location.options)
            );
          });
          clearInterval(interval);
        }
      }, 75);
    };

    onMount(() => {
      if (BROWSER) {
        if (upload()) mount();
        else {
          const src = `https://api-maps.yandex.ru/2.1/?lang=${lang}&amp;apikey=${apikey}`;
          let create = true;
          document.querySelectorAll('script').forEach((el) => el.src === src && (create = false));
          if (create) {
            const el = document.createElement('script');
            el.src = src;
            el.async = true;
            document.head.appendChild(el);
            el.addEventListener('load', mount, { once: true });
          } else mount();
        }
        return () => clearInterval(interval);
      }
    });
  }
</script>

{#if apikey}
  <slot {id} >
    <svelte:element
      this={tag}
      on:mousedown|preventDefault|stopPropagation
      on:mouseup|preventDefault|stopPropagation
      on:touchstart|passive|stopPropagation
      on:touchend|passive|stopPropagation
      {id}
      class={classNames(
        'bg-no-repeat bg-center bg-waiting bg-1/5 lg:bg-1/10',
        'bg-neutral-300',
        className
      )} />
  </slot>
{/if}

