import { register } from 'node:module'
register(String(new URL('./hooks.mjs', import.meta.url)), {
  parentURL: import.meta.url,
})
