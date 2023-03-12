<script lang="ts">
  import { YandexMetrikaHit, Async, LightboxKit } from '$lib';

  import { gallery } from '$lib';
  const getter = async () => ({
    images: await gallery.generate(gallery.async.sources),
    thumbnails: await gallery.generate(gallery.async.squares)
  });

  const title = 'DAKS • Lightbox';
  const description = 'DAKS: lightbox';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Lightbox</h1>
  </header>

  <LightboxKit
    class="
      wrapper
      sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
      tag="aside"
  images={gallery.sources}
  thumbnails={gallery.squares}
  grid
  rounded
  shadow
  scale />

  <hr class="wrapper my-16" />

  <Async
    let:value
    {getter}>
    <LightboxKit
      class="
      wrapper
      sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
      tag="aside"
      {...value}
      grid
      centered
      rounded
      shadow
      scale
      grayscale />
  </Async>
</main>
