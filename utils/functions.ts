import type { NitroFetchOptions } from 'nitropack';

export const clientFetch = async (url: string, options: NitroFetchOptions<any>) => {
  return await $fetch(url, options).catch((e) => console.error(e));
};