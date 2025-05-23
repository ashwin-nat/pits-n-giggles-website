// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app'],
    },
  },
  site: 'https://pitsngiggles.com',
});