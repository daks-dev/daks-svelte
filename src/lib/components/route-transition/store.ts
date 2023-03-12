import { writable } from 'svelte/store';

export default (() => {
  const { subscribe, update } = writable(0);

  return {
    subscribe,
    set: (value: number) => update(() => value),
    change: () => update((value) => (value < 3 ? ++value : 0))
  };
})();
