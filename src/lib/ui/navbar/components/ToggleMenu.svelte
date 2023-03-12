<script lang="ts">
  import Icon from '$lib/ui/iconify/Icon.svelte';

  let className: undefined | string = undefined;
  export {className as class};

  export let hidden: boolean;
  export let toggle: () => void;
  export let size: number | string = '1.75em';
</script>

<button
  on:click={toggle}
  class={className}
  aria-label="toggle menu"
  aria-expanded={!hidden}
  aria-controls="navbar-menu">
  <Icon
    class="pointer-events-none"
    icon="ic:round-menu"
    {size} />
</button>
