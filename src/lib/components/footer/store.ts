import { readable } from 'svelte/store';

export default readable(0, function start(set) {
  const date = Date.now();
  const interval = setInterval(() => {
    set(Date.now() - date);
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});
