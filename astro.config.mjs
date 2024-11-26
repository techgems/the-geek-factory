import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://the-geek-factory.pages.dev/',
  integrations: [svelte(), tailwind()]
});