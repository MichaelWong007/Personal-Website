import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://michaelwong.space',
  output: 'static', // static 模式现已支持 Serverless Functions
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'zh',
        locales: {
          zh: 'zh-CN',
        },
      },
    })
  ]
});
