<script lang="ts">
  import classNames from 'classnames';
  import Dropdown, { DropdownWrapper } from '$lib/ui/dropdown';
  import Nav, { type NavItem } from '$lib/shared/navigate';

  let className: any = undefined;
  export { className as class };
  export let classLink: any = undefined;

  export let link: NavItem;
  export let size: number | string = '1.25em';
  export let duration = 300;

  const base = `${link.base ?? ''}${link.href ?? ''}`;
</script>

<Dropdown
  let:id
  let:hidden
  class={classNames(
    'py-2 px-4 lg:px-2',
    link.style,
    classLink,
    className
  )}
  {size}
  {...Nav.props(link)}>
  <DropdownWrapper
    {id}
    {hidden}
    class="
      z-10 left-2 lg:left-1/2 lg:-translate-x-1/2 lg:mt-1
      max-w-xs sm:max-w-sm md:max-w-md
      text-base
      bg-neutral-50/95 dark:bg-slate-700/95
      shadow-lg shadow-gray-600 lg:shadow-none lg:drop-shadow-md
      rounded-md focus:outline-none
      divide-y divide-neutral-200/95 dark:divide-slate-600/95
      origin-top-left lg:origin-top"
    classLink={classNames(
      'py-2 px-4 justify-end lg:justify-center',
      'text-right lg:text-center',
      classLink
    )}
    items={link.links}
    base={link.base ?? link.href ?? ''}
    {duration} />
</Dropdown>
