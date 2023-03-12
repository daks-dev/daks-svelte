<script lang="ts">
  import classNames from 'classnames';
  import { Nav, Link, type NavItem } from '$lib/shared';

  let className: any = undefined;
  export { className as class };

  export let link: NavItem;
  export let base = '';
  link.base ??= base;
  export let size: number | string = '1.25em';
</script>

<Link
  on:click
  on:dblclick
  on:keypress
  class={classNames(
    'flex items-center w-full lg:w-fit py-2 px-4 lg:px-2',
    link.style,
    className
  )}
  {size}
  {...Nav.props(link)} />
