import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // 验证必填字段
    const { name, location, address, code, quantity, number, message } = data;
    
    if (!name || !location || !address || !code || !quantity || !number) {
      return new Response(
        JSON.stringify({ error: '请填写所有必填字段' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 配置邮件传输器
    const transporter = nodemailer.createTransport({
      host: 'smtp.126.com',
      port: 465,
      secure: true,
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS,
      },
    });

    // 邮件内容
    const mailOptions = {
      from: `"实体书预定系统" <${import.meta.env.EMAIL_USER}>`,
      to: 'michaelwong007@126.com',
      subject: `📚 新的实体书预定 - ${name}`,
      html: `
        <div style="font-family: 'Microsoft YaHei', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
          <div style="background: white; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #333; border-bottom: 3px solid #4A90E2; padding-bottom: 10px; margin-bottom: 20px;">
              📚 新的实体书预定
            </h1>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #4A90E2; font-size: 18px; margin-top: 0;">📝 预定信息</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #666; font-weight: bold; width: 120px;">姓名</td>
                  <td style="padding: 10px 0; color: #333;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666; font-weight: bold;">所在地区</td>
                  <td style="padding: 10px 0; color: #333;">${location}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666; font-weight: bold;">街道地址</td>
                  <td style="padding: 10px 0; color: #333;">${address}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666; font-weight: bold;">邮政编码</td>
                  <td style="padding: 10px 0; color: #333;">${code}</td>
                </tr>
                <tr style="background: #fff3cd;">
                  <td style="padding: 10px 0; color: #666; font-weight: bold;">预定数量</td>
                  <td style="padding: 10px 0; color: #d9534f; font-weight: bold; font-size: 18px;">${quantity} 本</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666; font-weight: bold;">联系电话</td>
                  <td style="padding: 10px 0; color: #333;">${number}</td>
                </tr>
              </table>
            </div>
            
            ${message ? `
              <div style="background: #e8f4f8; padding: 20px; border-radius: 8px; border-left: 4px solid #4A90E2;">
                <h3 style="color: #4A90E2; font-size: 16px; margin-top: 0;">💬 留言</h3>
                <p style="color: #333; line-height: 1.6; margin: 0;">${message}</p>
              </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px dashed #ddd; color: #999; font-size: 12px; text-align: center;">
              <p style="margin: 5px 0;">提交时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
              <p style="margin: 5px 0;">来自: michaelwong.space 实体书预定系统</p>
            </div>
          </div>
        </div>
      `,
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: '预定信息已成功提交！我会尽快与您联系。' 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('邮件发送失败:', error);
    return new Response(
      JSON.stringify({ 
        error: '提交失败，请稍后重试或直接联系我：michaelwong007@126.com',
        details: error instanceof Error ? error.message : '未知错误'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
