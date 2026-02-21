import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CYV8ZAtR.mjs';
import { manifest } from './manifest_BUxfyClj.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/book-interest.astro.mjs');
const _page3 = () => import('./pages/archive/memoir.astro.mjs');
const _page4 = () => import('./pages/archive/memoir-reader.astro.mjs');
const _page5 = () => import('./pages/archive.astro.mjs');
const _page6 = () => import('./pages/poetry/_slug_.astro.mjs');
const _page7 = () => import('./pages/poetry-prose.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/book-interest.ts", _page2],
    ["src/pages/archive/memoir.astro", _page3],
    ["src/pages/archive/memoir-reader.astro", _page4],
    ["src/pages/archive.astro", _page5],
    ["src/pages/poetry/[slug].astro", _page6],
    ["src/pages/poetry-prose.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ef31b897-edd6-431c-a4ba-5300c35b9872",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
