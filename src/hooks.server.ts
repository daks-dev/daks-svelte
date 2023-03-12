import { DEV } from 'esm-env';
import { hooks, iconkit } from '$lib/server';
import type { Handle } from '@sveltejs/kit';

DEV && iconkit();

const redirects: any = {
  // '': ''
};

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname in redirects) {
    return new Response(undefined, {
      status: 308,
      headers: {
        location: redirects[event.url.pathname]
      }
    });
  }
  return await hooks({ event, resolve });
};
