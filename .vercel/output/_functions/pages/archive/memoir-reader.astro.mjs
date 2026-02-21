import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DhKIrlcn.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_pGapj7r0.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$MemoirReader = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Olympiad Memoir - Reader", "data-astro-cid-7purwvht": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="reader-container" data-astro-cid-7purwvht> <header class="reader-header" data-astro-cid-7purwvht> <a href="/archive/memoir" class="back-btn" data-astro-cid-7purwvht> <span class="icon" data-astro-cid-7purwvht>\u2190</span> \u8FD4\u56DE
</a> <div class="reader-controls" data-astro-cid-7purwvht> <button id="toggle-mode" class="control-btn" data-astro-cid-7purwvht>\u5207\u6362\u6EDA\u52A8\u6A21\u5F0F</button> <button id="prev-page" class="control-btn" disabled data-astro-cid-7purwvht>\u4E0A\u4E00\u9875</button> <span class="page-info" data-astro-cid-7purwvht> <input type="number" id="page-num-input" value="1" min="1" class="page-input" data-astro-cid-7purwvht> / <span id="page-count" data-astro-cid-7purwvht>--</span> </span> <button id="next-page" class="control-btn" data-astro-cid-7purwvht>\u4E0B\u4E00\u9875</button> <button id="zoom-out" class="control-btn icon-btn" data-astro-cid-7purwvht>\u2212</button> <button id="zoom-in" class="control-btn icon-btn" data-astro-cid-7purwvht>+</button> </div> </header> <div class="pdf-viewer-wrapper" id="pdf-viewer-wrapper" data-astro-cid-7purwvht> <div id="pdf-container" data-astro-cid-7purwvht></div> </div> <div id="loading-indicator" class="loading-indicator" data-astro-cid-7purwvht>
\u52A0\u8F7D\u4E2D...
</div> </div>  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf_viewer.min.css"> <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf_viewer.min.js"><\/script> <script>
    // \u8BBE\u7F6E worker \u8DEF\u5F84
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const url = '/memoir.pdf'; // PDF \u6587\u4EF6\u8DEF\u5F84

    let pdfDoc = null,
        pageNum = 1,
        scale = 1.5,
        isScrollMode = false,
        renderedPages = new Set(),
        wrapper = document.getElementById('pdf-viewer-wrapper'),
        container = document.getElementById('pdf-container');

    // \u79FB\u52A8\u7AEF\u81EA\u9002\u5E94\u521D\u59CB\u7F29\u653E\u6BD4\u4F8B
    if (window.innerWidth < 768) {
      scale = window.innerWidth / 600;
    }

    // \u521B\u5EFA\u9875\u9762\u5BB9\u5668
    const createPageContainer = async (num) => {
      const pageDiv = document.createElement('div');
      pageDiv.className = 'pdf-page';
      pageDiv.id = \`page-\${num}\`;
      pageDiv.dataset.pageNumber = num;
      
      // \u9884\u5148\u83B7\u53D6\u9875\u9762\u5C3A\u5BF8\u4EE5\u8BBE\u7F6E\u5360\u4F4D\u7B26\u5927\u5C0F\uFF0C\u9632\u6B62\u6EDA\u52A8\u6761\u8DF3\u52A8
      try {
        const page = await pdfDoc.getPage(num);
        const viewport = page.getViewport({ scale });
        pageDiv.style.width = \`\${viewport.width}px\`;
        pageDiv.style.height = \`\${viewport.height}px\`;
        pageDiv.style.minHeight = \`\${viewport.height}px\`; // Ensure it takes up space even before canvas renders
        pageDiv.style.flexShrink = '0'; // Prevent flexbox from squishing the pages
      } catch (e) {
        console.error('Error getting page size for placeholder', e);
      }
      
      const canvas = document.createElement('canvas');
      const textLayer = document.createElement('div');
      textLayer.className = 'textLayer';
      const annotationLayer = document.createElement('div');
      annotationLayer.className = 'annotationLayer';

      pageDiv.appendChild(canvas);
      pageDiv.appendChild(textLayer);
      pageDiv.appendChild(annotationLayer);
      container.appendChild(pageDiv);
      
      return { pageDiv, canvas, textLayer, annotationLayer };
    };

    // \u6E32\u67D3\u5355\u9875
    const renderPage = async (num) => {
      if (renderedPages.has(num)) return;
      
      let pageElements = document.getElementById(\`page-\${num}\`);
      let canvas, textLayer, annotationLayer;
      
      if (!pageElements) {
        const els = await createPageContainer(num);
        canvas = els.canvas;
        textLayer = els.textLayer;
        annotationLayer = els.annotationLayer;
      } else {
        canvas = pageElements.querySelector('canvas');
        textLayer = pageElements.querySelector('.textLayer');
        annotationLayer = pageElements.querySelector('.annotationLayer');
      }

      try {
        const page = await pdfDoc.getPage(num);
        const viewport = page.getViewport({ scale });
        
        // \u8BBE\u7F6E\u5C3A\u5BF8
        pageElements = document.getElementById(\`page-\${num}\`);
        pageElements.style.width = \`\${viewport.width}px\`;
        pageElements.style.height = \`\${viewport.height}px\`;
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // \u6E32\u67D3 Canvas
        const renderCtx = {
          canvasContext: canvas.getContext('2d'),
          viewport: viewport
        };
        await page.render(renderCtx).promise;

        // \u6E32\u67D3\u6587\u672C\u5C42 (\u7528\u4E8E\u9009\u4E2D\u548C\u641C\u7D22)
        textLayer.innerHTML = '';
        textLayer.style.width = \`\${viewport.width}px\`;
        textLayer.style.height = \`\${viewport.height}px\`;
        textLayer.style.setProperty('--scale-factor', scale);
        
        const textContent = await page.getTextContent();
        pdfjsViewer.renderTextLayer({
          textContentSource: textContent,
          container: textLayer,
          viewport: viewport,
          textDivs: []
        });

        // \u6E32\u67D3\u6CE8\u91CA\u5C42 (\u7528\u4E8E\u8D85\u94FE\u63A5)
        annotationLayer.innerHTML = '';
        annotationLayer.style.width = \`\${viewport.width}px\`;
        annotationLayer.style.height = \`\${viewport.height}px\`;
        
        const annotations = await page.getAnnotations();
        
        // \u624B\u52A8\u6E32\u67D3\u8D85\u94FE\u63A5\uFF0C\u786E\u4FDD\u517C\u5BB9\u6027\u548C\u53EF\u70B9\u51FB\u6027
        annotations.forEach(annotation => {
          // PDF.js \u4E2D\uFF0C\u5916\u90E8\u94FE\u63A5\u901A\u5E38\u5728 annotation.url\uFF0C\u5185\u90E8\u8DF3\u8F6C\u5728 annotation.dest
          if (annotation.subtype === 'Link') {
            const a = document.createElement('a');
            a.className = 'pdf-link';
            
            if (annotation.url) {
              a.href = annotation.url;
              a.target = '_blank';
              a.rel = 'noopener noreferrer';
            } else if (annotation.dest) {
              // \u5185\u90E8\u8DF3\u8F6C (\u6682\u4E0D\u5904\u7406\u590D\u6742\u8DF3\u8F6C\uFF0C\u4EC5\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A)
              a.href = '#';
              a.onclick = async (e) => {
                e.preventDefault();
                console.log('Internal link clicked:', annotation.dest);
                try {
                  // \u5C1D\u8BD5\u89E3\u6790\u5185\u90E8\u8DF3\u8F6C\u76EE\u6807
                  let dest = annotation.dest;
                  if (typeof dest === 'string') {
                    dest = await pdfDoc.getDestination(dest);
                  }
                  if (dest && dest[0]) {
                    const pageIndex = await pdfDoc.getPageIndex(dest[0]);
                    const targetPageNum = pageIndex + 1;
                    
                    if (isScrollMode) {
                      const targetEl = document.getElementById(\`page-\${targetPageNum}\`);
                      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      pageNum = targetPageNum;
                      container.innerHTML = '';
                      renderedPages.clear();
                      renderPage(pageNum);
                      wrapper.scrollTop = 0;
                      document.getElementById('page-num-input').value = pageNum;
                      document.getElementById('prev-page').disabled = pageNum <= 1;
                      document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
                    }
                  }
                } catch (err) {
                  console.error('Error navigating to internal link:', err);
                }
              };
            } else {
              return; // \u6CA1\u6709\u76EE\u6807\uFF0C\u8DF3\u8FC7
            }
            
            // \u5C06 PDF \u5750\u6807\u8F6C\u6362\u4E3A\u89C6\u53E3\u5750\u6807
            const rect = viewport.convertToViewportRectangle(annotation.rect);
            const x = Math.min(rect[0], rect[2]);
            const y = Math.min(rect[1], rect[3]);
            const width = Math.abs(rect[0] - rect[2]);
            const height = Math.abs(rect[1] - rect[3]);
            
            a.style.left = \`\${x}px\`;
            a.style.top = \`\${y}px\`;
            a.style.width = \`\${width}px\`;
            a.style.height = \`\${height}px\`;
            
            annotationLayer.appendChild(a);
          }
        });

        renderedPages.add(num);
        
        // \u66F4\u65B0\u9875\u7801\u663E\u793A (\u5355\u9875\u6A21\u5F0F\u4E0B)
        if (!isScrollMode) {
          document.getElementById('page-num-input').value = num;
          document.getElementById('prev-page').disabled = num <= 1;
          document.getElementById('next-page').disabled = num >= pdfDoc.numPages;
        }
      } catch (err) {
        console.error(\`Error rendering page \${num}:\`, err);
      }
    };

    // \u5207\u6362\u6A21\u5F0F
    const toggleMode = async () => {
      isScrollMode = !isScrollMode;
      const btn = document.getElementById('toggle-mode');
      btn.textContent = isScrollMode ? '\u5207\u6362\u5355\u9875\u6A21\u5F0F' : '\u5207\u6362\u6EDA\u52A8\u6A21\u5F0F';
      
      document.getElementById('prev-page').style.display = isScrollMode ? 'none' : 'block';
      document.getElementById('next-page').style.display = isScrollMode ? 'none' : 'block';
      
      container.innerHTML = '';
      renderedPages.clear();
      
      if (isScrollMode) {
        // \u6EDA\u52A8\u6A21\u5F0F\uFF1A\u521B\u5EFA\u6240\u6709\u5360\u4F4D\u7B26\uFF0C\u4F7F\u7528 IntersectionObserver \u61D2\u52A0\u8F7D
        // \u663E\u793A\u52A0\u8F7D\u63D0\u793A
        const loadingIndicator = document.getElementById('loading-indicator');
        loadingIndicator.style.display = 'block';
        loadingIndicator.textContent = '\u6B63\u5728\u51C6\u5907\u6EDA\u52A8\u6A21\u5F0F...';
        
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          await createPageContainer(i);
        }
        
        loadingIndicator.style.display = 'none';
        setupIntersectionObserver();
        
        // \u6EDA\u52A8\u5230\u5F53\u524D\u9875
        setTimeout(() => {
          const currentPageEl = document.getElementById(\`page-\${pageNum}\`);
          if (currentPageEl) {
            currentPageEl.scrollIntoView();
          }
        }, 100);
      } else {
        // \u5355\u9875\u6A21\u5F0F\uFF1A\u53EA\u6E32\u67D3\u5F53\u524D\u9875
        if (observer) observer.disconnect();
        renderPage(pageNum);
      }
    };

    // \u61D2\u52A0\u8F7D\u89C2\u5BDF\u8005
    let observer;
    const setupIntersectionObserver = () => {
      if (observer) observer.disconnect();
      
      // \u8BB0\u5F55\u6BCF\u4E2A\u9875\u9762\u7684\u53EF\u89C1\u5EA6
      const pageVisibility = new Map();
      
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const num = parseInt(entry.target.dataset.pageNumber);
          
          // \u66F4\u65B0\u8BE5\u9875\u9762\u7684\u53EF\u89C1\u5EA6
          pageVisibility.set(num, entry.intersectionRatio);
          
          // \u5982\u679C\u8FDB\u5165\u89C6\u53E3\uFF0C\u89E6\u53D1\u6E32\u67D3
          if (entry.isIntersecting) {
            renderPage(num);
          }
        });

        // \u627E\u5230\u5F53\u524D\u5728\u89C6\u53E3\u4E2D\u5360\u6BD4\u6700\u5927\u7684\u9875\u9762
        let maxIntersectionRatio = 0;
        let visiblePageNum = pageNum;

        for (const [num, ratio] of pageVisibility.entries()) {
          if (ratio > maxIntersectionRatio) {
            maxIntersectionRatio = ratio;
            visiblePageNum = num;
          }
        }

        // \u66F4\u65B0\u5F53\u524D\u9605\u8BFB\u9875\u7801
        if (maxIntersectionRatio > 0 && visiblePageNum !== pageNum) {
          pageNum = visiblePageNum;
          document.getElementById('page-num-input').value = pageNum;
          
          // \u6EDA\u52A8\u6A21\u5F0F\u4E0B\u4E5F\u66F4\u65B0\u6309\u94AE\u72B6\u6001\uFF08\u867D\u7136\u6309\u94AE\u53EF\u80FD\u88AB\u9690\u85CF\uFF0C\u4F46\u4FDD\u6301\u72B6\u6001\u6B63\u786E\uFF09
          document.getElementById('prev-page').disabled = pageNum <= 1;
          document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
        }
      }, {
        root: wrapper,
        rootMargin: '100% 0px', // \u63D0\u524D\u4E00\u5C4F\u52A0\u8F7D
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] // \u589E\u52A0\u66F4\u591A\u9608\u503C\u4EE5\u66F4\u7CBE\u786E\u5730\u5224\u65AD\u54EA\u4E2A\u9875\u9762\u6700\u53EF\u89C1
      });

      document.querySelectorAll('.pdf-page').forEach(page => {
        observer.observe(page);
      });
    };

    // \u4E0A\u4E00\u9875
    const showPrevPage = () => {
      if (isScrollMode || pageNum <= 1) return;
      pageNum--;
      container.innerHTML = '';
      renderedPages.clear();
      renderPage(pageNum);
      wrapper.scrollTop = 0;
      
      // \u66F4\u65B0\u6309\u94AE\u72B6\u6001
      document.getElementById('page-num-input').value = pageNum;
      document.getElementById('prev-page').disabled = pageNum <= 1;
      document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
    };

    // \u4E0B\u4E00\u9875
    const showNextPage = () => {
      if (isScrollMode || pageNum >= pdfDoc.numPages) return;
      pageNum++;
      container.innerHTML = '';
      renderedPages.clear();
      renderPage(pageNum);
      wrapper.scrollTop = 0;
      
      // \u66F4\u65B0\u6309\u94AE\u72B6\u6001
      document.getElementById('page-num-input').value = pageNum;
      document.getElementById('prev-page').disabled = pageNum <= 1;
      document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
    };

    // \u91CD\u65B0\u6E32\u67D3\u5F53\u524D\u89C6\u56FE
    const reRender = () => {
      renderedPages.clear();
      if (isScrollMode) {
        document.querySelectorAll('.pdf-page').forEach(page => {
          const canvas = page.querySelector('canvas');
          if (canvas) {
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
          }
        });
        // \u89E6\u53D1 observer \u91CD\u65B0\u6E32\u67D3\u53EF\u89C1\u533A\u57DF
        wrapper.dispatchEvent(new Event('scroll'));
      } else {
        container.innerHTML = '';
        renderPage(pageNum);
      }
    };

    // \u653E\u5927
    const zoomIn = () => {
      scale += 0.2;
      reRender();
    };

    // \u7F29\u5C0F
    const zoomOut = () => {
      if (scale <= 0.4) return;
      scale -= 0.2;
      reRender();
    };

    // \u83B7\u53D6\u6587\u6863
    pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
      pdfDoc = pdfDoc_;
      document.getElementById('page-count').textContent = pdfDoc.numPages;
      document.getElementById('loading-indicator').style.display = 'none';
      
      // \u9ED8\u8BA4\u5355\u9875\u6A21\u5F0F
      renderPage(pageNum);
    }).catch(err => {
      const loadingIndicator = document.getElementById('loading-indicator');
      loadingIndicator.textContent = '\u52A0\u8F7D PDF \u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B58\u5728\u3002';
      loadingIndicator.style.color = '#f87171';
      console.error('Error loading PDF:', err);
    });

    // \u7ED1\u5B9A\u4E8B\u4EF6
    document.getElementById('prev-page').addEventListener('click', showPrevPage);
    document.getElementById('next-page').addEventListener('click', showNextPage);
    document.getElementById('zoom-in').addEventListener('click', zoomIn);
    document.getElementById('zoom-out').addEventListener('click', zoomOut);
    document.getElementById('toggle-mode').addEventListener('click', toggleMode);

    // \u9875\u7801\u8F93\u5165\u8DF3\u8F6C
    const pageInput = document.getElementById('page-num-input');
    
    const handlePageJump = () => {
      let targetPage = parseInt(pageInput.value);
      
      // \u9A8C\u8BC1\u8F93\u5165
      if (isNaN(targetPage) || targetPage < 1) {
        targetPage = 1;
      } else if (targetPage > pdfDoc.numPages) {
        targetPage = pdfDoc.numPages;
      }
      
      // \u66F4\u65B0\u8F93\u5165\u6846\u663E\u793A\u4E3A\u6709\u6548\u503C
      pageInput.value = targetPage;
      
      if (targetPage === pageNum && !isScrollMode) return;
      
      pageNum = targetPage;
      
      if (isScrollMode) {
        // \u6EDA\u52A8\u6A21\u5F0F\u4E0B\uFF0C\u6EDA\u52A8\u5230\u5BF9\u5E94\u9875\u9762
        const targetPageEl = document.getElementById(\`page-\${pageNum}\`);
        if (targetPageEl) {
          targetPageEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          // \u5982\u679C\u9875\u9762\u5143\u7D20\u8FD8\u4E0D\u5B58\u5728\uFF08\u53EF\u80FD\u5728\u5F88\u540E\u9762\uFF09\uFF0C\u5148\u6E32\u67D3\u5B83
          container.innerHTML = '';
          renderedPages.clear();
          for (let i = 1; i <= pdfDoc.numPages; i++) {
            createPageContainer(i);
          }
          setupIntersectionObserver();
          setTimeout(() => {
            const newTargetEl = document.getElementById(\`page-\${pageNum}\`);
            if (newTargetEl) newTargetEl.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
        
        // \u66F4\u65B0\u6309\u94AE\u72B6\u6001
        document.getElementById('prev-page').disabled = pageNum <= 1;
        document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
      } else {
        // \u5355\u9875\u6A21\u5F0F\u4E0B\uFF0C\u91CD\u65B0\u6E32\u67D3
        container.innerHTML = '';
        renderedPages.clear();
        renderPage(pageNum);
        
        // \u66F4\u65B0\u6309\u94AE\u72B6\u6001
        document.getElementById('prev-page').disabled = pageNum <= 1;
        document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
      }
    };

    pageInput.addEventListener('change', handlePageJump);
    pageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handlePageJump();
        pageInput.blur(); // \u79FB\u9664\u7126\u70B9\uFF0C\u9690\u85CF\u79FB\u52A8\u7AEF\u952E\u76D8
      }
    });

    // \u952E\u76D8\u7FFB\u9875\u652F\u6301
    document.addEventListener('keydown', (e) => {
      // \u5982\u679C\u7126\u70B9\u5728\u8F93\u5165\u6846\u5185\uFF0C\u4E0D\u89E6\u53D1\u5DE6\u53F3\u952E\u7FFB\u9875
      if (document.activeElement === pageInput) return;
      
      if (isScrollMode) return;
      if (e.key === 'ArrowLeft') showPrevPage();
      if (e.key === 'ArrowRight') showNextPage();
    });
  <\/script> `], [" ", `<div class="reader-container" data-astro-cid-7purwvht> <header class="reader-header" data-astro-cid-7purwvht> <a href="/archive/memoir" class="back-btn" data-astro-cid-7purwvht> <span class="icon" data-astro-cid-7purwvht>\u2190</span> \u8FD4\u56DE
</a> <div class="reader-controls" data-astro-cid-7purwvht> <button id="toggle-mode" class="control-btn" data-astro-cid-7purwvht>\u5207\u6362\u6EDA\u52A8\u6A21\u5F0F</button> <button id="prev-page" class="control-btn" disabled data-astro-cid-7purwvht>\u4E0A\u4E00\u9875</button> <span class="page-info" data-astro-cid-7purwvht> <input type="number" id="page-num-input" value="1" min="1" class="page-input" data-astro-cid-7purwvht> / <span id="page-count" data-astro-cid-7purwvht>--</span> </span> <button id="next-page" class="control-btn" data-astro-cid-7purwvht>\u4E0B\u4E00\u9875</button> <button id="zoom-out" class="control-btn icon-btn" data-astro-cid-7purwvht>\u2212</button> <button id="zoom-in" class="control-btn icon-btn" data-astro-cid-7purwvht>+</button> </div> </header> <div class="pdf-viewer-wrapper" id="pdf-viewer-wrapper" data-astro-cid-7purwvht> <div id="pdf-container" data-astro-cid-7purwvht></div> </div> <div id="loading-indicator" class="loading-indicator" data-astro-cid-7purwvht>
\u52A0\u8F7D\u4E2D...
</div> </div>  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf_viewer.min.css"> <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf_viewer.min.js"><\/script> <script>
    // \u8BBE\u7F6E worker \u8DEF\u5F84
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const url = '/memoir.pdf'; // PDF \u6587\u4EF6\u8DEF\u5F84

    let pdfDoc = null,
        pageNum = 1,
        scale = 1.5,
        isScrollMode = false,
        renderedPages = new Set(),
        wrapper = document.getElementById('pdf-viewer-wrapper'),
        container = document.getElementById('pdf-container');

    // \u79FB\u52A8\u7AEF\u81EA\u9002\u5E94\u521D\u59CB\u7F29\u653E\u6BD4\u4F8B
    if (window.innerWidth < 768) {
      scale = window.innerWidth / 600;
    }

    // \u521B\u5EFA\u9875\u9762\u5BB9\u5668
    const createPageContainer = async (num) => {
      const pageDiv = document.createElement('div');
      pageDiv.className = 'pdf-page';
      pageDiv.id = \\\`page-\\\${num}\\\`;
      pageDiv.dataset.pageNumber = num;
      
      // \u9884\u5148\u83B7\u53D6\u9875\u9762\u5C3A\u5BF8\u4EE5\u8BBE\u7F6E\u5360\u4F4D\u7B26\u5927\u5C0F\uFF0C\u9632\u6B62\u6EDA\u52A8\u6761\u8DF3\u52A8
      try {
        const page = await pdfDoc.getPage(num);
        const viewport = page.getViewport({ scale });
        pageDiv.style.width = \\\`\\\${viewport.width}px\\\`;
        pageDiv.style.height = \\\`\\\${viewport.height}px\\\`;
        pageDiv.style.minHeight = \\\`\\\${viewport.height}px\\\`; // Ensure it takes up space even before canvas renders
        pageDiv.style.flexShrink = '0'; // Prevent flexbox from squishing the pages
      } catch (e) {
        console.error('Error getting page size for placeholder', e);
      }
      
      const canvas = document.createElement('canvas');
      const textLayer = document.createElement('div');
      textLayer.className = 'textLayer';
      const annotationLayer = document.createElement('div');
      annotationLayer.className = 'annotationLayer';

      pageDiv.appendChild(canvas);
      pageDiv.appendChild(textLayer);
      pageDiv.appendChild(annotationLayer);
      container.appendChild(pageDiv);
      
      return { pageDiv, canvas, textLayer, annotationLayer };
    };

    // \u6E32\u67D3\u5355\u9875
    const renderPage = async (num) => {
      if (renderedPages.has(num)) return;
      
      let pageElements = document.getElementById(\\\`page-\\\${num}\\\`);
      let canvas, textLayer, annotationLayer;
      
      if (!pageElements) {
        const els = await createPageContainer(num);
        canvas = els.canvas;
        textLayer = els.textLayer;
        annotationLayer = els.annotationLayer;
      } else {
        canvas = pageElements.querySelector('canvas');
        textLayer = pageElements.querySelector('.textLayer');
        annotationLayer = pageElements.querySelector('.annotationLayer');
      }

      try {
        const page = await pdfDoc.getPage(num);
        const viewport = page.getViewport({ scale });
        
        // \u8BBE\u7F6E\u5C3A\u5BF8
        pageElements = document.getElementById(\\\`page-\\\${num}\\\`);
        pageElements.style.width = \\\`\\\${viewport.width}px\\\`;
        pageElements.style.height = \\\`\\\${viewport.height}px\\\`;
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // \u6E32\u67D3 Canvas
        const renderCtx = {
          canvasContext: canvas.getContext('2d'),
          viewport: viewport
        };
        await page.render(renderCtx).promise;

        // \u6E32\u67D3\u6587\u672C\u5C42 (\u7528\u4E8E\u9009\u4E2D\u548C\u641C\u7D22)
        textLayer.innerHTML = '';
        textLayer.style.width = \\\`\\\${viewport.width}px\\\`;
        textLayer.style.height = \\\`\\\${viewport.height}px\\\`;
        textLayer.style.setProperty('--scale-factor', scale);
        
        const textContent = await page.getTextContent();
        pdfjsViewer.renderTextLayer({
          textContentSource: textContent,
          container: textLayer,
          viewport: viewport,
          textDivs: []
        });

        // \u6E32\u67D3\u6CE8\u91CA\u5C42 (\u7528\u4E8E\u8D85\u94FE\u63A5)
        annotationLayer.innerHTML = '';
        annotationLayer.style.width = \\\`\\\${viewport.width}px\\\`;
        annotationLayer.style.height = \\\`\\\${viewport.height}px\\\`;
        
        const annotations = await page.getAnnotations();
        
        // \u624B\u52A8\u6E32\u67D3\u8D85\u94FE\u63A5\uFF0C\u786E\u4FDD\u517C\u5BB9\u6027\u548C\u53EF\u70B9\u51FB\u6027
        annotations.forEach(annotation => {
          // PDF.js \u4E2D\uFF0C\u5916\u90E8\u94FE\u63A5\u901A\u5E38\u5728 annotation.url\uFF0C\u5185\u90E8\u8DF3\u8F6C\u5728 annotation.dest
          if (annotation.subtype === 'Link') {
            const a = document.createElement('a');
            a.className = 'pdf-link';
            
            if (annotation.url) {
              a.href = annotation.url;
              a.target = '_blank';
              a.rel = 'noopener noreferrer';
            } else if (annotation.dest) {
              // \u5185\u90E8\u8DF3\u8F6C (\u6682\u4E0D\u5904\u7406\u590D\u6742\u8DF3\u8F6C\uFF0C\u4EC5\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A)
              a.href = '#';
              a.onclick = async (e) => {
                e.preventDefault();
                console.log('Internal link clicked:', annotation.dest);
                try {
                  // \u5C1D\u8BD5\u89E3\u6790\u5185\u90E8\u8DF3\u8F6C\u76EE\u6807
                  let dest = annotation.dest;
                  if (typeof dest === 'string') {
                    dest = await pdfDoc.getDestination(dest);
                  }
                  if (dest && dest[0]) {
                    const pageIndex = await pdfDoc.getPageIndex(dest[0]);
                    const targetPageNum = pageIndex + 1;
                    
                    if (isScrollMode) {
                      const targetEl = document.getElementById(\\\`page-\\\${targetPageNum}\\\`);
                      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      pageNum = targetPageNum;
                      container.innerHTML = '';
                      renderedPages.clear();
                      renderPage(pageNum);
                      wrapper.scrollTop = 0;
                      document.getElementById('page-num-input').value = pageNum;
                      document.getElementById('prev-page').disabled = pageNum <= 1;
                      document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
                    }
                  }
                } catch (err) {
                  console.error('Error navigating to internal link:', err);
                }
              };
            } else {
              return; // \u6CA1\u6709\u76EE\u6807\uFF0C\u8DF3\u8FC7
            }
            
            // \u5C06 PDF \u5750\u6807\u8F6C\u6362\u4E3A\u89C6\u53E3\u5750\u6807
            const rect = viewport.convertToViewportRectangle(annotation.rect);
            const x = Math.min(rect[0], rect[2]);
            const y = Math.min(rect[1], rect[3]);
            const width = Math.abs(rect[0] - rect[2]);
            const height = Math.abs(rect[1] - rect[3]);
            
            a.style.left = \\\`\\\${x}px\\\`;
            a.style.top = \\\`\\\${y}px\\\`;
            a.style.width = \\\`\\\${width}px\\\`;
            a.style.height = \\\`\\\${height}px\\\`;
            
            annotationLayer.appendChild(a);
          }
        });

        renderedPages.add(num);
        
        // \u66F4\u65B0\u9875\u7801\u663E\u793A (\u5355\u9875\u6A21\u5F0F\u4E0B)
        if (!isScrollMode) {
          document.getElementById('page-num-input').value = num;
          document.getElementById('prev-page').disabled = num <= 1;
          document.getElementById('next-page').disabled = num >= pdfDoc.numPages;
        }
      } catch (err) {
        console.error(\\\`Error rendering page \\\${num}:\\\`, err);
      }
    };

    // \u5207\u6362\u6A21\u5F0F
    const toggleMode = async () => {
      isScrollMode = !isScrollMode;
      const btn = document.getElementById('toggle-mode');
      btn.textContent = isScrollMode ? '\u5207\u6362\u5355\u9875\u6A21\u5F0F' : '\u5207\u6362\u6EDA\u52A8\u6A21\u5F0F';
      
      document.getElementById('prev-page').style.display = isScrollMode ? 'none' : 'block';
      document.getElementById('next-page').style.display = isScrollMode ? 'none' : 'block';
      
      container.innerHTML = '';
      renderedPages.clear();
      
      if (isScrollMode) {
        // \u6EDA\u52A8\u6A21\u5F0F\uFF1A\u521B\u5EFA\u6240\u6709\u5360\u4F4D\u7B26\uFF0C\u4F7F\u7528 IntersectionObserver \u61D2\u52A0\u8F7D
        // \u663E\u793A\u52A0\u8F7D\u63D0\u793A
        const loadingIndicator = document.getElementById('loading-indicator');
        loadingIndicator.style.display = 'block';
        loadingIndicator.textContent = '\u6B63\u5728\u51C6\u5907\u6EDA\u52A8\u6A21\u5F0F...';
        
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          await createPageContainer(i);
        }
        
        loadingIndicator.style.display = 'none';
        setupIntersectionObserver();
        
        // \u6EDA\u52A8\u5230\u5F53\u524D\u9875
        setTimeout(() => {
          const currentPageEl = document.getElementById(\\\`page-\\\${pageNum}\\\`);
          if (currentPageEl) {
            currentPageEl.scrollIntoView();
          }
        }, 100);
      } else {
        // \u5355\u9875\u6A21\u5F0F\uFF1A\u53EA\u6E32\u67D3\u5F53\u524D\u9875
        if (observer) observer.disconnect();
        renderPage(pageNum);
      }
    };

    // \u61D2\u52A0\u8F7D\u89C2\u5BDF\u8005
    let observer;
    const setupIntersectionObserver = () => {
      if (observer) observer.disconnect();
      
      // \u8BB0\u5F55\u6BCF\u4E2A\u9875\u9762\u7684\u53EF\u89C1\u5EA6
      const pageVisibility = new Map();
      
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const num = parseInt(entry.target.dataset.pageNumber);
          
          // \u66F4\u65B0\u8BE5\u9875\u9762\u7684\u53EF\u89C1\u5EA6
          pageVisibility.set(num, entry.intersectionRatio);
          
          // \u5982\u679C\u8FDB\u5165\u89C6\u53E3\uFF0C\u89E6\u53D1\u6E32\u67D3
          if (entry.isIntersecting) {
            renderPage(num);
          }
        });

        // \u627E\u5230\u5F53\u524D\u5728\u89C6\u53E3\u4E2D\u5360\u6BD4\u6700\u5927\u7684\u9875\u9762
        let maxIntersectionRatio = 0;
        let visiblePageNum = pageNum;

        for (const [num, ratio] of pageVisibility.entries()) {
          if (ratio > maxIntersectionRatio) {
            maxIntersectionRatio = ratio;
            visiblePageNum = num;
          }
        }

        // \u66F4\u65B0\u5F53\u524D\u9605\u8BFB\u9875\u7801
        if (maxIntersectionRatio > 0 && visiblePageNum !== pageNum) {
          pageNum = visiblePageNum;
          document.getElementById('page-num-input').value = pageNum;
          
          // \u6EDA\u52A8\u6A21\u5F0F\u4E0B\u4E5F\u66F4\u65B0\u6309\u94AE\u72B6\u6001\uFF08\u867D\u7136\u6309\u94AE\u53EF\u80FD\u88AB\u9690\u85CF\uFF0C\u4F46\u4FDD\u6301\u72B6\u6001\u6B63\u786E\uFF09
          document.getElementById('prev-page').disabled = pageNum <= 1;
          document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
        }
      }, {
        root: wrapper,
        rootMargin: '100% 0px', // \u63D0\u524D\u4E00\u5C4F\u52A0\u8F7D
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] // \u589E\u52A0\u66F4\u591A\u9608\u503C\u4EE5\u66F4\u7CBE\u786E\u5730\u5224\u65AD\u54EA\u4E2A\u9875\u9762\u6700\u53EF\u89C1
      });

      document.querySelectorAll('.pdf-page').forEach(page => {
        observer.observe(page);
      });
    };

    // \u4E0A\u4E00\u9875
    const showPrevPage = () => {
      if (isScrollMode || pageNum <= 1) return;
      pageNum--;
      container.innerHTML = '';
      renderedPages.clear();
      renderPage(pageNum);
      wrapper.scrollTop = 0;
      
      // \u66F4\u65B0\u6309\u94AE\u72B6\u6001
      document.getElementById('page-num-input').value = pageNum;
      document.getElementById('prev-page').disabled = pageNum <= 1;
      document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
    };

    // \u4E0B\u4E00\u9875
    const showNextPage = () => {
      if (isScrollMode || pageNum >= pdfDoc.numPages) return;
      pageNum++;
      container.innerHTML = '';
      renderedPages.clear();
      renderPage(pageNum);
      wrapper.scrollTop = 0;
      
      // \u66F4\u65B0\u6309\u94AE\u72B6\u6001
      document.getElementById('page-num-input').value = pageNum;
      document.getElementById('prev-page').disabled = pageNum <= 1;
      document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
    };

    // \u91CD\u65B0\u6E32\u67D3\u5F53\u524D\u89C6\u56FE
    const reRender = () => {
      renderedPages.clear();
      if (isScrollMode) {
        document.querySelectorAll('.pdf-page').forEach(page => {
          const canvas = page.querySelector('canvas');
          if (canvas) {
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
          }
        });
        // \u89E6\u53D1 observer \u91CD\u65B0\u6E32\u67D3\u53EF\u89C1\u533A\u57DF
        wrapper.dispatchEvent(new Event('scroll'));
      } else {
        container.innerHTML = '';
        renderPage(pageNum);
      }
    };

    // \u653E\u5927
    const zoomIn = () => {
      scale += 0.2;
      reRender();
    };

    // \u7F29\u5C0F
    const zoomOut = () => {
      if (scale <= 0.4) return;
      scale -= 0.2;
      reRender();
    };

    // \u83B7\u53D6\u6587\u6863
    pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
      pdfDoc = pdfDoc_;
      document.getElementById('page-count').textContent = pdfDoc.numPages;
      document.getElementById('loading-indicator').style.display = 'none';
      
      // \u9ED8\u8BA4\u5355\u9875\u6A21\u5F0F
      renderPage(pageNum);
    }).catch(err => {
      const loadingIndicator = document.getElementById('loading-indicator');
      loadingIndicator.textContent = '\u52A0\u8F7D PDF \u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B58\u5728\u3002';
      loadingIndicator.style.color = '#f87171';
      console.error('Error loading PDF:', err);
    });

    // \u7ED1\u5B9A\u4E8B\u4EF6
    document.getElementById('prev-page').addEventListener('click', showPrevPage);
    document.getElementById('next-page').addEventListener('click', showNextPage);
    document.getElementById('zoom-in').addEventListener('click', zoomIn);
    document.getElementById('zoom-out').addEventListener('click', zoomOut);
    document.getElementById('toggle-mode').addEventListener('click', toggleMode);

    // \u9875\u7801\u8F93\u5165\u8DF3\u8F6C
    const pageInput = document.getElementById('page-num-input');
    
    const handlePageJump = () => {
      let targetPage = parseInt(pageInput.value);
      
      // \u9A8C\u8BC1\u8F93\u5165
      if (isNaN(targetPage) || targetPage < 1) {
        targetPage = 1;
      } else if (targetPage > pdfDoc.numPages) {
        targetPage = pdfDoc.numPages;
      }
      
      // \u66F4\u65B0\u8F93\u5165\u6846\u663E\u793A\u4E3A\u6709\u6548\u503C
      pageInput.value = targetPage;
      
      if (targetPage === pageNum && !isScrollMode) return;
      
      pageNum = targetPage;
      
      if (isScrollMode) {
        // \u6EDA\u52A8\u6A21\u5F0F\u4E0B\uFF0C\u6EDA\u52A8\u5230\u5BF9\u5E94\u9875\u9762
        const targetPageEl = document.getElementById(\\\`page-\\\${pageNum}\\\`);
        if (targetPageEl) {
          targetPageEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          // \u5982\u679C\u9875\u9762\u5143\u7D20\u8FD8\u4E0D\u5B58\u5728\uFF08\u53EF\u80FD\u5728\u5F88\u540E\u9762\uFF09\uFF0C\u5148\u6E32\u67D3\u5B83
          container.innerHTML = '';
          renderedPages.clear();
          for (let i = 1; i <= pdfDoc.numPages; i++) {
            createPageContainer(i);
          }
          setupIntersectionObserver();
          setTimeout(() => {
            const newTargetEl = document.getElementById(\\\`page-\\\${pageNum}\\\`);
            if (newTargetEl) newTargetEl.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
        
        // \u66F4\u65B0\u6309\u94AE\u72B6\u6001
        document.getElementById('prev-page').disabled = pageNum <= 1;
        document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
      } else {
        // \u5355\u9875\u6A21\u5F0F\u4E0B\uFF0C\u91CD\u65B0\u6E32\u67D3
        container.innerHTML = '';
        renderedPages.clear();
        renderPage(pageNum);
        
        // \u66F4\u65B0\u6309\u94AE\u72B6\u6001
        document.getElementById('prev-page').disabled = pageNum <= 1;
        document.getElementById('next-page').disabled = pageNum >= pdfDoc.numPages;
      }
    };

    pageInput.addEventListener('change', handlePageJump);
    pageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handlePageJump();
        pageInput.blur(); // \u79FB\u9664\u7126\u70B9\uFF0C\u9690\u85CF\u79FB\u52A8\u7AEF\u952E\u76D8
      }
    });

    // \u952E\u76D8\u7FFB\u9875\u652F\u6301
    document.addEventListener('keydown', (e) => {
      // \u5982\u679C\u7126\u70B9\u5728\u8F93\u5165\u6846\u5185\uFF0C\u4E0D\u89E6\u53D1\u5DE6\u53F3\u952E\u7FFB\u9875
      if (document.activeElement === pageInput) return;
      
      if (isScrollMode) return;
      if (e.key === 'ArrowLeft') showPrevPage();
      if (e.key === 'ArrowRight') showNextPage();
    });
  <\/script> `])), maybeRenderHead()) })} `;
}, "C:/Users/Micha/celestial-cloud/src/pages/archive/memoir-reader.astro", void 0);

const $$file = "C:/Users/Micha/celestial-cloud/src/pages/archive/memoir-reader.astro";
const $$url = "/archive/memoir-reader";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MemoirReader,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
