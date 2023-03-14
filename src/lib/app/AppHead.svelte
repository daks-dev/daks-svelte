<script lang="ts">
  interface AppMeta {
    themeColor?: string;
    tileColor?: string;
    shortName?: string;
  }

  export let app: undefined | AppMeta = undefined;

  export let robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  export let title: undefined | string = undefined;
  export let description: undefined | string = undefined;
  export let canonical: undefined | string = undefined;
</script>

<svelte:head>
  {#if app}
    {#if app.themeColor}
      <meta
        name="theme-color"
        content={app.themeColor} />
    {/if}
    {#if app.tileColor}
      <meta
        name="msapplication-TileColor"
        content={app.tileColor} />
    {/if}
    {#if app.shortName}
      <meta
        name="application-name"
        content={app.shortName} />
    {/if}
    {#if app.shortName}
      <meta
        name="apple-mobile-web-app-title"
        content={app.shortName} />
    {/if}
  {:else if title}
    {#if robots}
      <meta
        name="robots"
        content={robots} />
    {/if}
    <title>{title}</title>
    {#if description}
      <meta
        name="description"
        content={description} />
    {/if}
    {#if canonical}
      <link
        rel="canonical"
        href={canonical} />
    {/if}
  {/if}
</svelte:head>
