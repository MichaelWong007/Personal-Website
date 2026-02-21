import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DhKIrlcn.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_pGapj7r0.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u9875\u9762\u672A\u627E\u5230 | michaelwong.space", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="error-container" data-astro-cid-zetdm5md> <div class="error-content" data-astro-cid-zetdm5md> <div class="error-code" data-astro-cid-zetdm5md> <div class="code-line" data-astro-cid-zetdm5md>CDIV</div> <div class="code-line" data-astro-cid-zetdm5md>肆零肆</div> <div class="code-line" data-astro-cid-zetdm5md>404</div> </div> <h1 class="error-title" data-astro-cid-zetdm5md>页面未找到</h1> <p class="error-description" data-astro-cid-zetdm5md>
Sorryyyyyyyyyyyyyyyy! 这个页面我还没写完……
</p> <p class="error-hint" data-astro-cid-zetdm5md>
或者是不是你记错了？也有可能对吧……（对手指）
</p> <div class="action-buttons" data-astro-cid-zetdm5md> <a href="/" class="btn btn-primary" data-astro-cid-zetdm5md> <span data-astro-cid-zetdm5md>返回首页</span> </a> </div> </div> </div> ` })} `;
}, "C:/Users/Micha/celestial-cloud/src/pages/404.astro", void 0);

const $$file = "C:/Users/Micha/celestial-cloud/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
