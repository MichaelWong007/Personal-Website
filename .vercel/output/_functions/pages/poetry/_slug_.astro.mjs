import { c as createComponent, r as renderComponent, a as renderTemplate, d as createAstro, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_DhKIrlcn.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_weHu-jgG.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_pGapj7r0.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const allEntries = await getCollection("poetry");
  const entry = allEntries.find((e) => e.slug === slug);
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  const { title, date, category, tags, coverImage } = entry.data;
  const formattedDate = `${date.getFullYear()}\u5E74${date.getMonth() + 1}\u6708${date.getDate()}\u65E5`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${title} | michaelwong.space`, "data-astro-cid-pgunmj7z": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="poetry-bg-lights" aria-hidden="true" data-astro-cid-pgunmj7z> <div class="light-source blue-light-large" data-astro-cid-pgunmj7z></div> <div class="light-source red-light-small" data-astro-cid-pgunmj7z></div> </div> <div class="poetry-layout" data-astro-cid-pgunmj7z> <article class="poetry-article" data-astro-cid-pgunmj7z> <header class="article-header" data-astro-cid-pgunmj7z> <h1 class="article-title" data-astro-cid-pgunmj7z>${title}</h1> <div class="article-meta" data-astro-cid-pgunmj7z> <span class="article-date" data-astro-cid-pgunmj7z>${formattedDate}</span> ${category && renderTemplate`<span class="article-category" data-astro-cid-pgunmj7z>${category}</span>`} </div> ${tags && tags.length > 0 && renderTemplate`<div class="article-tags" data-astro-cid-pgunmj7z> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/poetry?tag=${encodeURIComponent(tag)}`, "href")} class="tag" data-astro-cid-pgunmj7z>
#${tag} </a>`)} </div>`} </header> <div class="article-content" data-astro-cid-pgunmj7z> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-pgunmj7z": true })} </div> <footer class="article-footer" data-astro-cid-pgunmj7z> <a href="/poetry-prose" class="back-link" data-astro-cid-pgunmj7z>← 返回列表</a> </footer> </article> ${coverImage && renderTemplate`<aside class="article-cover" data-astro-cid-pgunmj7z> <img${addAttribute(coverImage, "src")}${addAttribute(`${title} \u5C01\u9762`, "alt")} loading="lazy" data-astro-cid-pgunmj7z> </aside>`} </div> ` })} `;
}, "C:/Users/Micha/celestial-cloud/src/pages/poetry/[slug].astro", void 0);

const $$file = "C:/Users/Micha/celestial-cloud/src/pages/poetry/[slug].astro";
const $$url = "/poetry/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
