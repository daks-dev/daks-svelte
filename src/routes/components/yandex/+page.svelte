<script lang="ts">
  import { YandexMetrikaHit, YandexMap } from '$lib';

  const data = {
    state: {
      center: [55.753664, 37.619899],
      zoom: 17,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    }
  };

  const title = 'СКМ • Контакты';
  const description = 'Контакты предприятия СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="justify-between min-h-screen mb-0"
  itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">Yandex</h1>
  </header>

  <YandexMap {data} />
</main>
