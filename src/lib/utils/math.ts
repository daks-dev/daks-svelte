export const uuid = () =>
  '_' +
  Math.floor((1 + Math.random()) * 0x10000000)
    .toString(16)
    .substring(1);
