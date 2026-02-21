import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_DhKIrlcn.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_pGapj7r0.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u6B22\u8FCE\u6765\u5230 michaelwong.space", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-j7pv25f6> <h1 class="title" data-astro-cid-j7pv25f6> <span id="typewriter" data-astro-cid-j7pv25f6></span> </h1> <p class="subtitle" data-astro-cid-j7pv25f6>钟爱各类视听逻辑文字美学与计算机艺术的热血青年</p> </div> ${renderScript($$result2, "C:/Users/Micha/celestial-cloud/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result2, "C:/Users/Micha/celestial-cloud/src/pages/index.astro?astro&type=script&index=1&lang.ts")} ` })} `;
}, "C:/Users/Micha/celestial-cloud/src/pages/index.astro", void 0);

const $$file = "C:/Users/Micha/celestial-cloud/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
