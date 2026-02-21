import { c as createComponent, i as renderHead, j as renderSlot, b as renderScript, a as renderTemplate, d as createAstro } from './astro/server_DhKIrlcn.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "michaelwong.space" } = Astro2.props;
  return renderTemplate`<html lang="zh-CN" data-astro-cid-37fxchfa> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><!-- 字体 --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400;1,6..96,700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@400;500;700&display=swap" rel="stylesheet"><!-- Favicon --><link rel="icon" href="https://pic.imgdb.cn/item/65556356c458853aef4ed7e8.png">${renderHead()}</head> <body data-astro-cid-37fxchfa> <!-- 光源 --> <div class="light-source blue-light" data-astro-cid-37fxchfa></div> <div class="light-source red-light" data-astro-cid-37fxchfa></div> <!-- 右上角品牌与导航 --> <div class="brand-nav" data-astro-cid-37fxchfa> <div class="brand" data-astro-cid-37fxchfa> <!-- 替换为你的字标图床链接 --> <a href="/" data-astro-cid-37fxchfa> <img src="https://pic1.imgdb.cn/item/6995d39a556e27f1c93a3414.png" alt="字标与徽标" class="logo" data-astro-cid-37fxchfa> </a> </div> <nav class="vertical-nav" data-astro-cid-37fxchfa> <a href="/poetry-prose" class="nav-item" data-astro-cid-37fxchfa> <div class="nav-title" data-astro-cid-37fxchfa> <span class="en" data-astro-cid-37fxchfa>POETRY & PROSE</span> <span class="zh" data-astro-cid-37fxchfa>碘伏诗文</span> </div> <div class="nav-desc" data-astro-cid-37fxchfa>
二两碘酊作为"穑斋主人"的诗文创作空间。<br data-astro-cid-37fxchfa>
记录了他的诗词作品和一些随笔。
</div> </a> <a href="https://www.cnblogs.com/michaelwong007" class="nav-item" data-astro-cid-37fxchfa> <div class="nav-title" data-astro-cid-37fxchfa> <span class="en" data-astro-cid-37fxchfa>PROGRAMMING</span> <span class="zh" data-astro-cid-37fxchfa>程序设计</span> </div> <div class="nav-desc" data-astro-cid-37fxchfa>
二两碘酊关于程序设计的一切。<br data-astro-cid-37fxchfa>
从 OI 到 ACM，从算法到数据结构，<br data-astro-cid-37fxchfa>从学习笔记到授课教案……
</div> </a> <a href="/archive" class="nav-item" data-astro-cid-37fxchfa> <div class="nav-title" data-astro-cid-37fxchfa> <span class="en" data-astro-cid-37fxchfa>ARCHIVE</span> <span class="zh" data-astro-cid-37fxchfa>个人档案</span> </div> <div class="nav-desc" data-astro-cid-37fxchfa>
个人档案馆。<br data-astro-cid-37fxchfa>
关于回忆录，关于创作的视频作品，<br data-astro-cid-37fxchfa>关于二两碘酊的琐碎线索。
</div> </a> <a href="/about" class="nav-item" data-astro-cid-37fxchfa> <div class="nav-title" data-astro-cid-37fxchfa> <span class="en" data-astro-cid-37fxchfa>ABOUT</span> <span class="zh" data-astro-cid-37fxchfa>关于</span> </div> <div class="nav-desc" data-astro-cid-37fxchfa>
想快速了解我？<br data-astro-cid-37fxchfa>想知道更多？
</div> </a> </nav> </div> <!-- 页面内容 --> <main class="page-content" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderScript($$result, "C:/Users/Micha/celestial-cloud/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "C:/Users/Micha/celestial-cloud/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
