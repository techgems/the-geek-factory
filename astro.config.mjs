import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://the-geek-factory.pages.dev/',
  integrations: [svelte(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});