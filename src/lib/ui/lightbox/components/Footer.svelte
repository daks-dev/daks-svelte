<script lang="ts">
  import classNames from 'classnames';
  import type { Custom, Status } from '..';

  export let title: string;
  export let subtitle: string;
  export let description: string;

  export let custom: Custom;
  export let fullscreen: boolean;

  export let status: Status = undefined;
</script>

<!--
  flex flex-wrap gap-1 items-center
-->
<div
  class={classNames('lightbox-footer', 'relative z-30', custom.footer)}
  class:fullscreen>
  <div
    class="
    p-2 min-h-[3rem]
    grid grid-cols-2 items-center  gap-1
    leading-none text-white/50 hover:text-white cursor-default">
    {#if title}
      <div class="font-semibold">
        {@html title}
      </div>
    {/if}
    {#if status}
      <div
        class="font-mono whitespace-nowrap"
        class:text-right={title}>
        {status.activeItem + 1} <sup>[{status.countItems}]</sup>
      </div>
    {/if}
    {#if subtitle}
      <span class="col-span-2">
        {@html subtitle}
      </span>
    {/if}
    {#if description}
      <small class="col-span-2">
        {@html description}
      </small>
    {/if}
  </div>
</div>
