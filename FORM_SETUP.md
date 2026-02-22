# 📧 实体书预定表单邮件配置指南

## 🎯 已完成的配置

✅ 创建了 Serverless API 端点：`/api/book-interest`
✅ 使用 nodemailer 发送邮件到 michaelwong007@126.com
✅ 配置了 Astro hybrid 模式支持 SSR
✅ 更新了表单提交逻辑，显示详细的成功/失败信息

## 📋 下一步操作

### 1️⃣ 获取126邮箱授权码

1. 登录126邮箱：https://mail.126.com
2. 点击右上角 **设置** → **POP3/SMTP/IMAP**
3. 找到 **SMTP服务**，点击 **开启**
4. 系统会要求验证身份（手机验证码）
5. 验证成功后会显示 **授权码**（一串字母数字组合）
6. **复制并保存这个授权码**（注意：不是邮箱登录密码！）

### 2️⃣ 配置本地环境变量

编辑项目根目录的 `.env` 文件：

```env
EMAIL_USER=michaelwong007@126.com
EMAIL_PASS=你刚才获取的授权码
```

### 3️⃣ 配置 Vercel 环境变量

1. 登录 Vercel Dashboard
2. 进入项目 → **Settings** → **Environment Variables**
3. 添加以下两个变量：
   - **Name**: `EMAIL_USER` / **Value**: `michaelwong007@126.com`
   - **Name**: `EMAIL_PASS` / **Value**: `你的126邮箱授权码`
4. **Environment**: 全选（Production, Preview, Development）
5. 点击 **Save**

### 4️⃣ 本地测试

```powershell
# 启动开发服务器
npm run dev

# 访问 http://localhost:4321/archive/memoir
# 滚动到底部，填写并提交表单
# 检查邮箱是否收到邮件
```

### 5️⃣ 部署到 Vercel

```powershell
# 确保所有文件已提交
git add .
git commit -m "Add serverless book order form with email notification"
git push

# Vercel 会自动检测到更改并重新部署
```

## 📧 邮件效果

提交成功后，您会收到一封包含以下信息的邮件：

- 📝 预定者姓名
- 📍 所在地区
- 🏠 详细地址
- 📮 邮政编码
- 📚 预定数量（高亮显示）
- 📞 联系电话
- 💬 留言（如果有）
- ⏰ 提交时间

## 🔧 故障排查

### 问题1：邮件发送失败 - 535 Error

**原因**：授权码错误或未开启SMTP服务
**解决**：重新获取授权码并更新环境变量

### 问题2：本地测试正常，部署后失败

**原因**：Vercel环境变量未配置
**解决**：检查 Vercel Dashboard 中的环境变量配置

### 问题3：表单提交后无响应

**原因**：API路由可能未正确部署
**解决**：
1. 检查 `astro.config.mjs` 是否设置为 `output: 'hybrid'`
2. 检查 `/api/book-interest.ts` 中的 `export const prerender = false;`

## 📝 文件说明

- `src/pages/api/book-interest.ts` - Serverless Function API端点
- `.env` - 本地环境变量（已加入 .gitignore，不会上传到Git）
- `.env.example` - 环境变量示例文件
- `astro.config.mjs` - 已改为 hybrid 模式

## 🎨 自定义邮件模板

如需修改邮件模板，编辑 `src/pages/api/book-interest.ts` 中的 `mailOptions.html` 部分。

## 🔒 安全提醒

⚠️ **请勿将 `.env` 文件提交到 Git！**
⚠️ **授权码具有与密码相同的权限，请妥善保管！**
✅ `.env` 已在 `.gitignore` 中，自动被Git忽略

---

配置完成后，您的实体书预定表单就可以正常工作了！🎉
