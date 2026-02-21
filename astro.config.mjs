import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [mdx()],
  output: 'hybrid',
  adapter: vercel({
    isr: false,
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 1280],
      formats: ['image/webp', 'image/jpeg'],
    }
  })
});
