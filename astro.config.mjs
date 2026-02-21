import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/server';

export default defineConfig({
  integrations: [mdx()],
  output: 'server',
  adapter: vercel()
});
