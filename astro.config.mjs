// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: 'https://gomjelly.github.io',

  markdown: {
    // Astro's built-in gfm uses remark-gfm's default singleTilde: true, which
    // treats a lone "~" (e.g. "250~280°C") as a strikethrough delimiter and
    // silently eats it if another "~" appears later in the same block.
    // Disable the built-in gfm and re-add it with singleTilde off so ranges
    // written with "~" render literally; MDX inherits this automatically.
    gfm: false,
    remarkPlugins: [[remarkGfm, { singleTilde: false }]],
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()]
});