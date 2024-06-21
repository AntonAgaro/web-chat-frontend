import type { NitroFetchOptions } from 'nitropack';
import type { AjaxResponse } from '~/types/AjaxResponse';

export const clientFetch = async (url: string, options: NitroFetchOptions<any>) => {
  const messageBuilder = useToast();
  const res =  await $fetch(url, {
    ...options
  }).catch((e) => {
    if (e.data.message) {
      messageBuilder.add({ title: e.data.message, color: 'red' });
    }
  });

  const data = res as AjaxResponse;
  
  if (data.message) {
    messageBuilder.add({ title: data.message, color: 'green' });
  }
  console.log(data);
  return data;
};