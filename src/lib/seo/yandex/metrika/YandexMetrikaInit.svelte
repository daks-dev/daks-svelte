<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import { counter } from '.';

  // const counter = process.env.YA_COUNTER ?? '';

  if (BROWSER && counter) {
    const init = () =>
      ym(counter, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        trackHash: true,
        webvisor: undefined
      });

    onMount(() => {
      (function (m: any, i) {
        m[i] = function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
        m[i].l = Number(new Date());
      })(window, 'ym');
      const el = document.createElement('script');
      el.src = 'https://mc.yandex.ru/metrika/tag.js';
      el.async = true;
      el.addEventListener('load', init, { once: true });
      document.head.appendChild(el);
    });
  }
</script>

<!--
{#if counter}
  <noscript>
    <div>
      <img
        src="https://mc.yandex.ru/watch/{counter}"
        style="position:absolute; left:-9999px;"
        alt="" />
    </div>
  </noscript>
{/if}
-->
