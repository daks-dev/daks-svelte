declare global {
  let ym: any;
}

export const counter = /^\d{7,9}$/.test(process.env.YA_COUNTER ?? '') && process.env.YA_COUNTER;

export { default as YandexMetrikaHit } from './YandexMetrikaHit.svelte';
export { default as YandexMetrikaInit } from './YandexMetrikaInit.svelte';
