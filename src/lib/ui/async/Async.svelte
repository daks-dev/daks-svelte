<script lang="ts">
  import classNames from 'classnames';
  import Icon from '$lib/ui/iconify/Icon.svelte';

  let className: any = 'w-48';
  export { className as class };

  export let getter;
  export let icons: { await?: string; catch?: string } = {};

  const promise = getter();
</script>

{#await promise}
  <Icon
    class={classNames(
      'mx-auto px-4 h-auto max-w-full',
      'text-neutral-600 dark:text-neutral-400',
      className
    )}
    icon="{icons.await || 'custom:blocks-scale'}" />
{:then value}
  <slot {value} />
{:catch error}
  <div class="flex flex-col items-center w-full">
    <!-- ic:round-error-outline -->
    <Icon
      class={classNames('mx-auto px-4 h-auto max-w-full', 'text-red-700', className)}
      icon="{icons.catch || 'line-md:alert-circle-twotone'}" />
      <span>{error.message}</span>
  </div>
  {@debug error}
{/await}
