import 'piccolore';
import { k as decodeKey } from './chunks/astro/server_DhKIrlcn.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CImd2Ctv.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Micha/celestial-cloud/","cacheDir":"file:///C:/Users/Micha/celestial-cloud/node_modules/.astro/","outDir":"file:///C:/Users/Micha/celestial-cloud/dist/","srcDir":"file:///C:/Users/Micha/celestial-cloud/src/","publicDir":"file:///C:/Users/Micha/celestial-cloud/public/","buildClientDir":"file:///C:/Users/Micha/celestial-cloud/dist/client/","buildServerDir":"file:///C:/Users/Micha/celestial-cloud/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"archive/memoir/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/archive/memoir","isIndex":false,"type":"page","pattern":"^\\/archive\\/memoir\\/?$","segments":[[{"content":"archive","dynamic":false,"spread":false}],[{"content":"memoir","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archive/memoir.astro","pathname":"/archive/memoir","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"archive/memoir-reader/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/archive/memoir-reader","isIndex":false,"type":"page","pattern":"^\\/archive\\/memoir-reader\\/?$","segments":[[{"content":"archive","dynamic":false,"spread":false}],[{"content":"memoir-reader","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archive/memoir-reader.astro","pathname":"/archive/memoir-reader","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"archive/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/archive","isIndex":false,"type":"page","pattern":"^\\/archive\\/?$","segments":[[{"content":"archive","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archive.astro","pathname":"/archive","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"poetry-prose/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/poetry-prose","isIndex":false,"type":"page","pattern":"^\\/poetry-prose\\/?$","segments":[[{"content":"poetry-prose","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/poetry-prose.astro","pathname":"/poetry-prose","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/book-interest","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/book-interest\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"book-interest","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/book-interest.ts","pathname":"/api/book-interest","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Micha/celestial-cloud/src/pages/poetry-prose.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/poetry-prose@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Micha/celestial-cloud/src/pages/poetry/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/poetry/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Micha/celestial-cloud/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Micha/celestial-cloud/src/pages/archive.astro",{"propagation":"none","containsHead":true}],["C:/Users/Micha/celestial-cloud/src/pages/archive/memoir-reader.astro",{"propagation":"none","containsHead":true}],["C:/Users/Micha/celestial-cloud/src/pages/archive/memoir.astro",{"propagation":"none","containsHead":true}],["C:/Users/Micha/celestial-cloud/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/book-interest@_@ts":"pages/api/book-interest.astro.mjs","\u0000@astro-page:src/pages/archive/memoir@_@astro":"pages/archive/memoir.astro.mjs","\u0000@astro-page:src/pages/archive/memoir-reader@_@astro":"pages/archive/memoir-reader.astro.mjs","\u0000@astro-page:src/pages/archive@_@astro":"pages/archive.astro.mjs","\u0000@astro-page:src/pages/poetry/[slug]@_@astro":"pages/poetry/_slug_.astro.mjs","\u0000@astro-page:src/pages/poetry-prose@_@astro":"pages/poetry-prose.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DbiL5L3-.mjs","C:/Users/Micha/celestial-cloud/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_FMwbxo8s.mjs","C:\\Users\\Micha\\celestial-cloud\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\Micha\\celestial-cloud\\.astro\\content-modules.mjs":"chunks/content-modules_COzbYuFt.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D10v9aqz.mjs","C:/Users/Micha/celestial-cloud/src/content/poetry/2026.1 双月刊.mdx?astroPropagatedAssets":"chunks/2026.1 双月刊_cCiPjqt7.mjs","C:/Users/Micha/celestial-cloud/src/content/poetry/2026.1 双月刊.mdx":"chunks/2026.1 双月刊_zmCbvSNV.mjs","C:/Users/Micha/celestial-cloud/src/pages/archive.astro?astro&type=script&index=1&lang.ts":"_astro/archive.astro_astro_type_script_index_1_lang.D7m2KD2_.js","C:/Users/Micha/celestial-cloud/src/pages/archive/memoir.astro?astro&type=script&index=0&lang.ts":"_astro/memoir.astro_astro_type_script_index_0_lang.Buf6ImID.js","C:/Users/Micha/celestial-cloud/src/pages/archive.astro?astro&type=script&index=0&lang.ts":"_astro/archive.astro_astro_type_script_index_0_lang.Cwro2NLH.js","C:/Users/Micha/celestial-cloud/src/pages/poetry-prose.astro?astro&type=script&index=0&lang.ts":"_astro/poetry-prose.astro_astro_type_script_index_0_lang.mwhU-UZm.js","C:/Users/Micha/celestial-cloud/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.UPAqhWgH.js","C:/Users/Micha/celestial-cloud/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.CrpjyuaK.js","C:/Users/Micha/celestial-cloud/src/pages/poetry-prose.astro?astro&type=script&index=1&lang.ts":"_astro/poetry-prose.astro_astro_type_script_index_1_lang.D7m2KD2_.js","C:/Users/Micha/celestial-cloud/src/pages/index.astro?astro&type=script&index=1&lang.ts":"_astro/index.astro_astro_type_script_index_1_lang.D7m2KD2_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Micha/celestial-cloud/src/pages/archive/memoir.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"book-interest-form\"),t=document.getElementById(\"form-status\"),e=document.getElementById(\"submit-btn\");n&&n.addEventListener(\"submit\",async s=>{if(s.preventDefault(),!e||!t)return;e.setAttribute(\"disabled\",\"true\"),e.style.opacity=\"0.7\",e.innerText=\"提交中...\";const r=new FormData(s.target),o=Object.fromEntries(r.entries());try{(await fetch(\"/api/book-interest\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(o)})).ok?(t.textContent=\"感谢您的支持！预定信息已提交。\",t.className=\"form-status success\",s.target.reset()):(t.textContent=\"提交失败，请稍后重试。\",t.className=\"form-status error\")}catch{t.textContent=\"网络错误，请检查您的连接。\",t.className=\"form-status error\"}finally{e.removeAttribute(\"disabled\"),e.style.opacity=\"1\",e.innerText=\"提交预定 →\"}});"],["C:/Users/Micha/celestial-cloud/src/pages/archive.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{new Typed(\"#typewriter\",{strings:[\"Archive\"],typeSpeed:80,startDelay:300,backDelay:2500,loop:!1,showCursor:!0});const r=document.querySelectorAll(\".archive-item\"),o=document.querySelector(\".archive-list\"),t=document.querySelector(\".preview-title\"),n=document.querySelector(\".preview-desc\"),e=document.querySelector(\".preview-content\"),a=\"The Iodine Tincture Archive\",c=\"欢迎来到二两碘酊的个人档案馆。\";r.forEach(s=>{s.addEventListener(\"mouseenter\",()=>{const i=s.getAttribute(\"data-title\"),d=s.getAttribute(\"data-desc\");if(t&&n&&e){if(t.textContent===i&&n.textContent===d)return;e.classList.add(\"fade-out\"),setTimeout(()=>{t.textContent=i,n.textContent=d,e.classList.remove(\"fade-out\"),e.classList.add(\"fade-in\")},200)}})}),o&&o.addEventListener(\"mouseleave\",()=>{t&&n&&e&&(e.classList.add(\"fade-out\"),setTimeout(()=>{t.textContent=a,n.textContent=c,e.classList.remove(\"fade-out\"),e.classList.add(\"fade-in\")},200))}),e&&e.addEventListener(\"animationend\",()=>{e.classList.remove(\"fade-in\")})});"],["C:/Users/Micha/celestial-cloud/src/pages/poetry-prose.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{new Typed(\"#typewriter\",{strings:[\"Poetry &amp; Prose\"],typeSpeed:80,startDelay:300,backDelay:2500,loop:!1,showCursor:!0})});"],["C:/Users/Micha/celestial-cloud/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{new Typed(\"#typewriter\",{strings:[\"michaelwong.space^3000\",\"space of <i>poetry</i>.\",\"space of <i>algorithms</i>.\",\"space of <i>reflections</i>.\",\"space of <b><i>me</i></b>.\"],typeSpeed:60,backSpeed:40,backDelay:2500,startDelay:500,loop:!0,smartBackspace:!1})});"],["C:/Users/Micha/celestial-cloud/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","document.documentElement.scrollTop=0;document.body.scrollTop=0;window.scrollTo(0,0);window.addEventListener(\"load\",()=>{document.documentElement.scrollTop=0,document.body.scrollTop=0,window.scrollTo(0,0)});"]],"assets":["/_astro/memoir.DxzHIPva.css","/_astro/archive.CVp9vJRK.css","/_astro/_slug_.DntK1gnO.css","/_astro/poetry-prose.Cpl9G-9n.css","/favicon.ico","/favicon.svg","/memoir.pdf","/_astro/archive.astro_astro_type_script_index_1_lang.D7m2KD2_.js","/_astro/index.astro_astro_type_script_index_1_lang.D7m2KD2_.js","/_astro/poetry-prose.astro_astro_type_script_index_1_lang.D7m2KD2_.js","/404.html","/archive/memoir/index.html","/archive/memoir-reader/index.html","/archive/index.html","/poetry-prose/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"+xj2vKHl8aDzleFBLIoquUeBwd6kZaMKYV+I/C8VxsQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
