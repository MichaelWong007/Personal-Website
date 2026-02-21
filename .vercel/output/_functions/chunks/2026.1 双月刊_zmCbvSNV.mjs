import { c as createComponent, m as maybeRenderHead, j as renderSlot, a as renderTemplate, d as createAstro, e as addAttribute, n as createVNode, ax as Fragment, ay as __astro_tag_component__ } from './astro/server_DhKIrlcn.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                                                  */
/* empty css                                                               */
/* empty css                                                             */
/* empty css                                                            */

const $$Astro$1 = createAstro();
const $$PoemLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PoemLayout;
  const { title, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="poem-container" data-astro-cid-s7ie365c> <header class="poem-header" data-astro-cid-s7ie365c> <h1 class="poem-title" data-astro-cid-s7ie365c>${title}</h1> <p class="poem-date" data-astro-cid-s7ie365c>${date}</p> </header> <div class="poem-content" data-astro-cid-s7ie365c> ${renderSlot($$result, $$slots["default"])} </div> </article> `;
}, "C:/Users/Micha/celestial-cloud/src/layouts/PoemLayout.astro", void 0);

const $$Preface = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="preface" data-astro-cid-cdvf5zgc> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/Micha/celestial-cloud/src/components/Preface.astro", void 0);

const $$Astro = createAstro();
const $$Verse = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Verse;
  const { align = "center" } = Astro2.props;
  const textAlign = align === "left" || align === "right" ? align : "center";
  return renderTemplate`${maybeRenderHead()}<div class="verse"${addAttribute(`text-align: ${textAlign};`, "style")} data-astro-cid-m4ijfaqt> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/Micha/celestial-cloud/src/components/Verse.astro", void 0);

const $$Note = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="note" data-astro-cid-qg6lmfty> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/Micha/celestial-cloud/src/components/Note.astro", void 0);

const frontmatter = {
  "title": "碘伏诗文双月刊｜一月 · 寒梅",
  "date": "2026-01-25T00:00:00.000Z",
  "coverImage": "https://pic1.imgdb.cn/item/69968124556e27f1c93a3c02.png",
  "category": "诗词",
  "excerpt": "双月刊开山作，碘伏诗文震撼上新！",
  "tags": ["双月刊", "沁园春", "七律", "忆秦娥", "七绝", "五绝", "点绛唇", "鹊桥仙", "贺新郎"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "一月--寒梅",
    "text": "一月 · 寒梅"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h2: "h2",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["注：除海报外本文中并未附图。图文欣赏请见 ", createVNode(_components.a, {
        href: "https://mp.weixin.qq.com/s/3Nbw60Mc9PvK49z7vCoobQ",
        children: "公众号推送"
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["　　", createVNode(_components.strong, {
          children: "《碘伏诗文双月刊》"
        }), " 是”碘伏诗文”栏目的常规双月刊推送，于每个", createVNode(_components.strong, {
          children: "单数月月底"
        }), "发布。推送具有与纸质刊物相同的", createVNode(_components.strong, {
          children: "封面"
        }), "设计，专注于收录近两个月来的文字作品，", createVNode(_components.strong, {
          children: "旧体诗歌"
        }), "为主。"]
      }), "\n", createVNode(_components.p, {
        children: ["　　2026 年的《双月刊》将以在中国历史上久负盛名的", createVNode(_components.strong, {
          children: "应季花类"
        }), "命名，这些花木在穑斋的个人经历中亦有独一无二的意义。"]
      }), "\n", createVNode(_components.p, {
        children: "　　愿《双月刊》能在清暇之余为诸位提供些许阅读乐趣，顺路捎带些穑斋的个人心气与精神。"
      }), "\n", createVNode(_components.p, {
        children: ["　　　　　　　　—— ", createVNode(_components.strong, {
          children: "穑斋主人"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "一月--寒梅",
      children: "一月 · 寒梅"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "本次收录时间：12.23.2025 - 1.25.2026"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "寒梅在中国文人圈相当出名了。愿今后余生，我也始终多少带些寒梅的精神。"
      }), "\n", createVNode(_components.p, {
        children: "　　　　　　　　——题记"
      }), "\n"]
    }), "\n", createVNode($$PoemLayout, {
      title: "沁园春 · 西历岁末",
      date: "二〇二五年十二月二十三日",
      children: [createVNode($$Preface, {
        children: createVNode(_components.p, {
          children: "　　西历年关岁末，顿感收获颇丰，歌以记之。推敲炼字，喜得景行君赐教，不胜感激。"
        })
      }), createVNode($$Verse, {
        children: [createVNode(_components.p, {
          children: "畿左津沽，南开洼地，东隅窗前。\r\n顾岁初旧友，发为俊采；\r\n榜中金桂，折作芳纶。\r\n岁亦常终，乐则罕至，\r\n何以今朝得两骈。\r\n层台醴，敬山河喜过，阜野无边。"
        }), createVNode(_components.p, {
          children: "卜居八里台园，\r\n便诗酒招来相尽欢。\r\n幸青莲飘逸，少时仕踧；\r\n东坡博洽，老来心宽。\r\n筋骨衷丹，形骸放浪，\r\n敢借凡身丈险关。\r\n更深挹，酹经秋跋涉，朗月夕烟。"
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$PoemLayout, {
      title: "​窃入唐一见后生诗赠",
      date: "二〇二五年十二月二十八日",
      children: [createVNode($$Verse, {
        children: createVNode(_components.p, {
          children: "少年何必挂愁容？唱罢严冬便是春。\r\n一院一亭皆可爱，三秋三舍尽余温。\r\n故轩可使寒风退，枯木亦如生气存。\r\n盘点富年真盛景，静园往岁不识深。"
        })
      }), createVNode($$Note, {
        children: [createVNode(_components.p, {
          children: "穑斋自注："
        }), createVNode(_components.p, {
          children: "　　今年年度总结想来唐一取个景，猛地想到周日好像穿校服可以在周假时间进出。走之前当然赋诗一首，回来这种地方就会有一些句子从脑子里蹦出来。必须抓住机会写成诗词。"
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$PoemLayout, {
      title: "忆秦娥 · 新岁旧事牢骚",
      date: "二〇二六年一月三日",
      children: [createVNode($$Verse, {
        align: "left",
        children: createVNode(_components.p, {
          children: "　　独身夜，故国失落寒风烈。寒风烈，孤单阡陌，闲愁圆月。　　多情未把人心解，翻来覆去还呜咽。还呜咽，寻常宵绪，又添新阕。"
        })
      }), createVNode($$Note, {
        children: [createVNode(_components.p, {
          children: "穑斋自注："
        }), createVNode(_components.p, {
          children: "　　这两阕是午夜在唐山写的，故国即谓唐山。坐火车回到唐山时，对唐山最大的印象，一个词，就是“失落”；不是 fallen，不是 broken，是 lost。"
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$PoemLayout, {
      title: "记冬月望日暮发天津",
      date: "二〇二六年一月三日",
      children: createVNode($$Verse, {
        children: createVNode(_components.p, {
          children: "清灯白拱辞行客，接踵候台飞火车。\r\n交错钢筋映朱月，津沽归路对蹉跎。"
        })
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$PoemLayout, {
      title: "书斋夜归",
      date: "二〇二六年一月六日",
      children: [createVNode($$Verse, {
        children: createVNode(_components.p, {
          children: "浓云混月影，昏宇落单星。\r\n何故抚阶坐，亲尝台下冰？"
        })
      }), createVNode($$Note, {
        children: [createVNode(_components.p, {
          children: "穑斋自注："
        }), createVNode(_components.p, {
          children: "　　十一点关门时很多人，一齐从图书馆出来，巧合看到一个女生，坐在台阶上抬头看着月亮。我不知道是谁，也不知道她坐在那里是在干些什么。我想可能是打电话或是复盘些什么，但是我更倾向于认为她只是坐在那里望月吹风。世界上值得多一个以此为享受的饱含情调的人。"
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$PoemLayout, {
      title: "贺新郎 · 新开湖观星",
      date: "二〇二六年一月十九日",
      children: [createVNode($$Verse, {
        align: "left",
        children: createVNode(_components.p, {
          children: "　　碧落生双曜。荡穹苍、启明枢位，天狼一角。尘世砼林出辰宿，犹忆津河硕茂。伤滋垢，而今多少。障断仙槎黄鹤路，障清光、惟作空深杳。失壁翼，鲜参昴。\r\n　　莫教渠盗琼都傲。怒拍案、自作飞廉，独当孟姥。招电征风京人吓，归唤璇玑素耀。再唤起、九垓重造。飙气一吹浮云破，又两吹、星汉无边浩。舆灿烂，霄夭袅。"
        })
      }), createVNode($$Note, {
        children: [createVNode(_components.p, {
          children: "穑斋自注："
        }), createVNode(_components.p, {
          children: "　　晚上看星星！久违地看到了木星和天狼星。依稀记得小时候看的科普呢，天狼星距离地球只有8.6光年，通常是天空中最亮的恒星。今天竟然还能幸运地看到一颗更亮的（当然他不是恒星），对了对星图，是岁星。能够在城市的夜晚看到这样两颗明星真的很幸福。"
        }), createVNode(_components.p, {
          children: "　　其实很少写星象和神话相关，还是长调，还带一些铺陈和隐喻，功力燃尽了简直是……"
        }), createVNode(_components.p, {
          children: "　　也没想写壮词的，结果前面情绪烘托到那了后面起的就比较猛qwq"
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["更多“新的旧诗”，敬请关注 ", createVNode(_components.strong, {
        children: "《碘伏诗文双月刊》"
      }), "！"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/poetry/2026.1%20%E5%8F%8C%E6%9C%88%E5%88%8A.mdx";
const file = "C:/Users/Micha/celestial-cloud/src/content/poetry/2026.1 双月刊.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Micha/celestial-cloud/src/content/poetry/2026.1 双月刊.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
