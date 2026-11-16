// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://volleyballtech.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
