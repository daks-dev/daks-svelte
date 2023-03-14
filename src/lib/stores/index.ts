import { readable, writable } from 'svelte/store';

export const sessionTime = readable(0, function start(set) {
  const date = Date.now();
  const interval = setInterval(() => {
    set(Date.now() - date);
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

export const routeTransitionMode = (() => {
  const { subscribe, update, set } = writable(0);

  return {
    subscribe,
    set, // (value: number | string) => update(() => Number(value)),
    change: () => update(value => value < 3 ? ++value : 0)
  };
})();

export const svelteKitCount = writable(0);

/*
export const theme = (() => {
  const { subscribe, update } = writable(true);

  return {
    subscribe,
    change: () =>
      update((value) => {
        const htmlTag = document.getElementsByTagName('html').item(0);
        if (htmlTag) {
          htmlTag.className = value ? 'light' : 'dark';
        }
        return !value;
      })
  };
})();
*/
