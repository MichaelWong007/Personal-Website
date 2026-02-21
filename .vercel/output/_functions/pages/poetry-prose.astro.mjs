import { c as createComponent, r as renderComponent, a as renderTemplate, d as createAstro, m as maybeRenderHead, e as addAttribute, b as renderScript } from '../chunks/astro/server_DhKIrlcn.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_pGapj7r0.mjs';
import { g as getCollection } from '../chunks/_astro_content_weHu-jgG.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$PoetryProse = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PoetryProse;
  const allPoetry = await getCollection("poetry");
  const sortedPoetry = allPoetry.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const urlParams = new URL(Astro2.request.url).searchParams;
  const selectedTag = urlParams.get("tag");
  const filteredPoetry = selectedTag ? sortedPoetry.filter(
    (entry) => entry.data.tags?.includes(selectedTag)
  ) : sortedPoetry;
  const allTags = /* @__PURE__ */ new Set();
  sortedPoetry.forEach((entry) => {
    entry.data.tags?.forEach((tag) => allTags.add(tag));
  });
  const uniqueTags = Array.from(allTags).sort();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Poetry & Prose \u7898\u4F0F\u8BD7\u6587 | michaelwong.space", "data-astro-cid-joqihrvj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="poetry-bg-lights" aria-hidden="true" data-astro-cid-joqihrvj> <div class="light-source blue-light-large" data-astro-cid-joqihrvj></div> <div class="light-source red-light-small" data-astro-cid-joqihrvj></div> </div> <section class="poetry-container" data-astro-cid-joqihrvj> <div class="page-title-row" data-astro-cid-joqihrvj> <h1 class="page-title" data-astro-cid-joqihrvj> <span id="typewriter" data-astro-cid-joqihrvj></span> </h1> <span class="page-title-zh" data-astro-cid-joqihrvj>碘伏诗文</span> </div> <p class="page-subtitle" data-astro-cid-joqihrvj>
自号穑斋主人｜与“碘伏漫谈”公众号“碘伏诗文”栏目同步<br data-astro-cid-joqihrvj>
专题式收录诗文作品｜单体查找与欣赏建议进入诗云
</p> <a href="/poem-cloud" class="subtitle-cloud-btn" data-astro-cid-joqihrvj>进入诗云 →</a> <div class="divider" data-astro-cid-joqihrvj></div> <!-- Tag 云 --> ${uniqueTags.length > 0 && renderTemplate`<div class="tag-cloud" data-astro-cid-joqihrvj> <a href="/poetry-prose"${addAttribute(`tag-cloud-item ${!selectedTag ? "active" : ""}`, "class")} data-astro-cid-joqihrvj>全部</a> ${uniqueTags.map((tag) => renderTemplate`<a${addAttribute(`/poetry-prose?tag=${encodeURIComponent(tag)}`, "href")}${addAttribute(`tag-cloud-item ${selectedTag === tag ? "active" : ""}`, "class")} data-astro-cid-joqihrvj> ${tag} </a>`)} </div>
      <p class="tag-info" data-astro-cid-joqihrvj> ${selectedTag ? `\u5171 ${filteredPoetry.length} \u7BC7\u542B\u6709 "${selectedTag}" \u6807\u7B7E\u7684\u6587\u7AE0` : `\u5171 ${sortedPoetry.length} \u7BC7\u6587\u7AE0`} </p>`} <!-- 动态文章列表 --> ${filteredPoetry.map((entry) => renderTemplate`<a${addAttribute(`/poetry/${entry.slug}`, "href")} class="poem" data-astro-cid-joqihrvj> <h2 class="poem-title" data-astro-cid-joqihrvj>${entry.data.title}</h2> <p class="poem-meta" data-astro-cid-joqihrvj> ${entry.data.date.getFullYear()}年${entry.data.date.getMonth() + 1}月${entry.data.date.getDate()}日
${entry.data.category && renderTemplate`<span class="poem-category" data-astro-cid-joqihrvj>${entry.data.category}</span>`} </p> ${entry.data.excerpt && renderTemplate`<p class="poem-excerpt" data-astro-cid-joqihrvj>${entry.data.excerpt}</p>`} ${entry.data.tags && entry.data.tags.length > 0 && renderTemplate`<div class="poem-tags" data-astro-cid-joqihrvj> ${entry.data.tags.map((tag) => renderTemplate`<span class="poem-tag" data-astro-cid-joqihrvj>#${tag}</span>`)} </div>`} </a>`)} </section> ${renderScript($$result2, "C:/Users/Micha/celestial-cloud/src/pages/poetry-prose.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result2, "C:/Users/Micha/celestial-cloud/src/pages/poetry-prose.astro?astro&type=script&index=1&lang.ts")} ` })} `;
}, "C:/Users/Micha/celestial-cloud/src/pages/poetry-prose.astro", void 0);

const $$file = "C:/Users/Micha/celestial-cloud/src/pages/poetry-prose.astro";
const $$url = "/poetry-prose";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PoetryProse,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
