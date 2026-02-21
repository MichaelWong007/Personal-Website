# 🌌 michaelwong.space

你好！欢迎来到 **michaelwong.space** —— 二两碘酊的个人空间。

这是一个融合诗文、算法、回忆的多维个人网站，采用现代化设计与交互，展现代码与文学的交融之美。

## 🚀 技术栈

- **框架**：[Astro](https://astro.build/) — 高性能的静态网站生成器
- **内容管理**：Astro Content Collections（支持 MDX）
- **样式**：CSS 3（含 CSS Grid、Flexbox、渐变与混合模式）
- **后端**：Node.js + Nodemailer（邮件推送功能）
- **部署**：Vercel

## 📁 项目结构

```
src/
├── pages/
│   ├── index.astro           # 首页 - 打字机效果欢迎页
│   ├── archive.astro         # 归档总页面
│   ├── poetry-prose.astro    # 碘伏诗文 - 诗文列表（支持标签筛选）
│   ├── 404.astro             # 404 错误页面
│   ├── archive/
│   │   ├── memoir.astro      # 走过人生的复平面 - 回忆录主页
│   │   └── memoir-reader.astro # 回忆录 PDF 阅读器
│   ├── poetry/
│   │   └── [slug].astro      # 诗文详情页动态路由
│   └── api/
│       └── book-interest.ts  # 实体书预订 API
├── content/
│   ├── config.ts             # Content Collections 配置
│   └── poetry/               # 诗文 MDX 内容集合
├── layouts/
│   ├── BaseLayout.astro      # 基础布局组件
│   └── PoemLayout.astro      # 诗文布局组件
└── components/
    ├── Note.astro            # 笔记组件
    ├── Preface.astro         # 前言组件
    └── Verse.astro           # 韵文组件
```

## 🎨 核心功能

### 🏠 首页（index.astro）
- 动态打字机效果欢迎文字
- 响应式布局设计

### 📚 碘伏诗文（poetry-prose.astro）
- 诗文作品集合展示
- 标签云系统（支持按标签筛选）
- 文章分类与日期统计
- 动态路由诗文详情页 ([slug].astro)

### 🎓 走过人生的复平面（memoir.astro）
- 个人 OI 生涯回忆录
- PDF 在线阅读器（memoir-reader.astro）
- 实体书预订功能
  - 邮件推送系统
  - 批次跟踪时间表
  - 表单验证与反馈

### ⚠️ 404 错误页面
- 三语言错误代码展示：CDIV（编程语言）、肆零肆（中文）、404
- 友好的导航提示
- 响应式设计

## ✨ 设计亮点

### 光源与视觉效果
- **呼吸闪烁动画**：回忆录页面的红色光源采用多关键帧呼吸效果
- **多色光源混合**：诗文页面结合蓝色与红色光源，通过 `mix-blend-mode: screen` 营造沉浸感
- **毛玻璃效果**：导航与按钮采用现代 `backdrop-filter: blur()` 设计

### 交互体验
- **返回导航**：诗文与回忆录页面左上角快捷返回按钮
- **悬停动画**：按钮与链接的流畅过渡效果
- **响应式适配**：完美支持桌面、平板、手机各种尺寸

## 🛠️ 开发与构建

### 本地开发
```bash
npm run dev
# 在 http://localhost:3000 启动开发服务器
```

### 生产构建
```bash
npm run build
# 生成 dist/ 目录下的静态文件
```

### 预览构建结果
```bash
npm preview
# 预览构建后的网站
```

## 📧 邮件系统配置

回忆录实体书预订功能使用 Nodemailer，需要环境变量配置：

```env
# .env
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
MAIL_HOST=smtp.google.com
MAIL_PORT=465
```

## 🎯 内容管理

### 添加新诗文

在 `src/content/poetry/` 下创建 `.mdx` 文件：

```mdx
---
title: "诗文标题"
date: 2026-02-22
category: "分类"
tags: ["标签1", "标签2"]
excerpt: "摘要文本"
coverImage: "/path/to/image.jpg"
---

# 诗文内容

你的创意内容...
```

## 🌟 特殊功能

- **智能标签系统**：自动提取所有诗文标签，支持多标签筛选
- **批次管理**：实体书预订支持分批制作与发货跟踪
- **PDF 阅读器**：集成回忆录 PDF 在线阅读功能
- **深色主题**：全站采用深色优先设计，护眼舒适

## 📝 网站信息

- **作者**：Michael Wong（二两碘酊）
- **关注领域**：编程竞赛、诗文写作、算法研究、个人成长
- **更新频率**：不定期

## 🎉 致谢

本站搭建过程中大量使用了 AI 辅助，感谢所有开源社区的支持！

---

**欢迎访问** 👉 [michaelwong.space](https://michaelwong.space)
