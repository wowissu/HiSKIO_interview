import { Middleware, Plugin } from '@nuxt/types';

export function middleware (cb: Middleware) {
  return cb;
}

export function plugin (cb: Plugin) {
  return cb;
}
