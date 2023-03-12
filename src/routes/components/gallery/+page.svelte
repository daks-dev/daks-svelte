<script lang="ts">
  import { YandexMetrikaHit, Async, GalleryKit } from '$lib';
  // import { squares } from '$lib/assets/images/gallery/async';
  // import generate from '$lib/assets/images/gallery/captions';

  import { gallery } from '$lib';
  const getter = async () => ({
    dataset: await gallery.generate(gallery.async.squares)
  });

  const title = 'DAKS • Gallery';
  const description = 'DAKS: gallery';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Gallery</h1>
  </header>

  <Async
    let:value
    {getter}>
    <GalleryKit
      class="
        wrapper
        sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
      classes={{}}
      {...value}
      grid
      centered
      expanded
      rounded
      shadow
      scale
      invert />
  </Async>
</main>
