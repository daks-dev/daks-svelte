<script lang="ts">
  import classNames from 'classnames';
  import Icon from '$lib/ui/iconify/Icon.svelte';

  let className: any = undefined;
  export { className as class };

  export let microdata: any;
  const { itemtype, name, logo, email, telephone, address } = microdata.organization;

  const canonical = process.env.APP_CANONICAL ? new URL(process.env.APP_CANONICAL).origin : '';
</script>

<div
  class={classNames(
    'content',
    'flex flex-col justify-between gap-4',
    'text-base md:text-lg lg:text-xl text-sky-800 dark:text-sky-200',
    className
  )}
  itemscope
  {itemtype}>
  <a
    class="
      pl-12 -indent-12 pr-2 py-2 rounded-lg
      hover:text-sky-500 hover:bg-slate-500/10"
    href="tel://{telephone.replace(/[\s-()]/g, '')}">
    <Icon
      icon="ic:round-phone-in-talk"
      class="inline w-10 h-10 px-1 -mt-0.5" />
    <span itemprop="telephone">{telephone}</span>
  </a>
  <a
    class="
      pl-12 -indent-12 pr-2 py-2 rounded-lg
      hover:text-sky-500 hover:bg-slate-500/10"
    href="mailto:{email}">
    <Icon
      icon="ic:round-mail-outline"
      class="inline w-10 h-10 px-1 -mt-px" />
    <span itemprop="email">{email}</span>
  </a>
  <div
    style:display="contents"
    itemprop="address"
    itemscope
    itemtype={address.itemtype}>
    <a
      rel="nofollow noreferrer"
      class="
        pl-12 -indent-12 pr-2 py-2 rounded-lg
        hover:text-sky-500 hover:bg-slate-500/10"
      href={address.url}
      target="_blank"
      itemprop="url">
      <Icon
        icon="ic:outline-location-on"
        class="inline w-10 h-10 px-1 -mt-0.5" />
      <span itemprop="postalCode">{address.postalCode}</span>,
      <span itemprop="addressLocality">{@html address.addressLocality}</span>,
      <span itemprop="streetAddress">{@html address.streetAddress}</span>
    </a>
    <meta
      itemprop="addressRegion"
      content={address.addressRegion} />
  </div>
  <meta
    itemprop="name"
    content={name} />
  <link
    itemprop="logo"
    href={`${canonical}${logo}`} />
</div>
