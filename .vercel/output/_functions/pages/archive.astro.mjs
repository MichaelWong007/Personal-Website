import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_DhKIrlcn.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_pGapj7r0.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Archive = createComponent(($$result, $$props, $$slots) => {
  const title = "Archive \u4E2A\u4EBA\u6863\u6848 | michaelwong.space";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "data-astro-cid-qma2cssl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="archive-bg-lights" aria-hidden="true" data-astro-cid-qma2cssl> <div class="light-source red-light-large" data-astro-cid-qma2cssl></div> <div class="light-source blue-light-small" data-astro-cid-qma2cssl></div> </div> <section class="archive-container" data-astro-cid-qma2cssl> <div class="page-title-row" data-astro-cid-qma2cssl> <h1 class="page-title" data-astro-cid-qma2cssl> <span id="typewriter" data-astro-cid-qma2cssl></span> </h1> <span class="page-title-zh" data-astro-cid-qma2cssl>个人档案</span> </div> <p class="page-subtitle" data-astro-cid-qma2cssl>
个人标识系统｜信息学竞赛回忆录｜<br data-astro-cid-qma2cssl>
视频作品归档｜作品集归档｜零散碎片
</p> <div class="divider" data-astro-cid-qma2cssl></div> <div class="archive-content-wrapper" data-astro-cid-qma2cssl> <nav class="archive-list" data-astro-cid-qma2cssl> <a href="/archive/vis" class="archive-item" data-desc="包括包括个人简介、主题色、徽标、中英文字标、中英文签字等" data-title="Identity
System" data-astro-cid-qma2cssl> <span class="archive-num" data-astro-cid-qma2cssl>I</span> <div class="archive-text" data-astro-cid-qma2cssl> <span class="archive-zh" data-astro-cid-qma2cssl>个人标识系统</span> <span class="archive-en" data-astro-cid-qma2cssl>Identity System</span> </div> </a> <a href="/archive/memoir" class="archive-item" data-desc="《走过人生的复平面：个人信息学奥林匹克生涯回顾》
从最开始到一切的结局，完整详细的个人回忆录。" data-title="Olympiad
Memoir" data-astro-cid-qma2cssl> <span class="archive-num" data-astro-cid-qma2cssl>II</span> <div class="archive-text" data-astro-cid-qma2cssl> <span class="archive-zh" data-astro-cid-qma2cssl>竞赛回忆录</span> <span class="archive-en" data-astro-cid-qma2cssl>Olympiad Memoir</span> </div> </a> <a href="/archive/video" class="archive-item" data-desc="收录了二两碘酊迄今为止的所有视频作品，包括个人创作、参赛作品与官方项目。" data-title="Video
Projects" data-astro-cid-qma2cssl> <span class="archive-num" data-astro-cid-qma2cssl>III</span> <div class="archive-text" data-astro-cid-qma2cssl> <span class="archive-zh" data-astro-cid-qma2cssl>视频作品</span> <span class="archive-en" data-astro-cid-qma2cssl>Video Projects</span> </div> </a> <a href="/archive/notes" class="archive-item" data-desc="目前包括了手制书与组图，以后还有更多！" data-title="Visual
Notes" data-astro-cid-qma2cssl> <span class="archive-num" data-astro-cid-qma2cssl>IV</span> <div class="archive-text" data-astro-cid-qma2cssl> <span class="archive-zh" data-astro-cid-qma2cssl>作品集</span> <span class="archive-en" data-astro-cid-qma2cssl>Visual Notes</span> </div> </a> <a href="/archive/photos" class="archive-item" data-desc="关于过往，关于长青的记忆。" data-title="Historical
Photographs" data-astro-cid-qma2cssl> <span class="archive-num" data-astro-cid-qma2cssl>V</span> <div class="archive-text" data-astro-cid-qma2cssl> <span class="archive-zh" data-astro-cid-qma2cssl>图集</span> <span class="archive-en" data-astro-cid-qma2cssl>Historical Photographs</span> </div> </a> </nav> <div class="archive-preview" data-astro-cid-qma2cssl> <div class="preview-content" data-astro-cid-qma2cssl> <h3 class="preview-title" data-astro-cid-qma2cssl>The Iodine Tincture Archive</h3> <p class="preview-desc" data-astro-cid-qma2cssl>欢迎来到二两碘酊的个人档案馆。</p> </div> </div> </div> </section> ${renderScript($$result2, "C:/Users/Micha/celestial-cloud/src/pages/archive.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result2, "C:/Users/Micha/celestial-cloud/src/pages/archive.astro?astro&type=script&index=1&lang.ts")} ` })} `;
}, "C:/Users/Micha/celestial-cloud/src/pages/archive.astro", void 0);

const $$file = "C:/Users/Micha/celestial-cloud/src/pages/archive.astro";
const $$url = "/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archive,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
