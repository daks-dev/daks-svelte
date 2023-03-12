<script lang="ts">
  import Icon from '$lib/ui/iconify/Icon.svelte';

  let className: undefined | string = undefined;
  export {className as class};

  export let disabled: boolean;
  export let size: number | string = '1.25em';
</script>

<div
  class={className}
  class:invisible={!disabled}
  aria-label="waiting"
  aria-hidden>
  <Icon
    icon="svg-spinners:8-dots-rotate"
    {size} />
</div>
