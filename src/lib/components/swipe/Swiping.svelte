<script lang="ts">
  import { afterNavigate, goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { swipe } from '$lib/utils/Swipe';
  import { routeTransitionMode } from '$lib/stores';

  export let scope: string[];
  export let paging = false;

  const modeDefault = $routeTransitionMode;

  const handleSwipe = (delta: { h: boolean; v: boolean; x: number }) => {
    if (delta.h && !delta.v) {
      let idx = scope.indexOf($page.url.pathname);
      if (idx > -1) {
        idx += delta.x > 0 ? -1 : 1;
        if (idx === scope.length) idx = -1;
      } else if ($page.url.pathname === '/') {
        idx = delta.x > 0 ? scope.length - 1 : 0;
      }
      const href = idx === -1 ? '/' : scope[idx];
      if (href) {
        if ($routeTransitionMode) $routeTransitionMode = (paging && 3) || (delta.x > 0 ? 1 : 2);
        goto(href);
      }
    }
  };

  afterNavigate(() => ($routeTransitionMode = modeDefault));
</script>

<svelte:body use:swipe.touch={handleSwipe} />
