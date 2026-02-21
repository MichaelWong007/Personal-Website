export const prerender = false; // Ensure this is treated as a server-side function

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate data
    if (!data.name || !data.email) {
      return new Response(JSON.stringify({
        message: 'Name and Email are required.'
      }), { status: 400 });
    }

    // Configure nodemailer transporter
    // You will need to set these environment variables in your deployment environment
    // For local development, you can create a .env file in the root of your project
    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST || 'smtp.126.com',
      port: parseInt(import.meta.env.SMTP_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: import.meta.env.SMTP_USER, // Your email address
        pass: import.meta.env.SMTP_PASS, // Your email password or app password
      },
    });

    // Setup email data
    const mailOptions = {
      from: import.meta.env.SMTP_USER, // Sender address
      to: 'michaelwong007@126.com', // Receiver address
      subject: `New Book Interest from ${data.name}`, // Subject line
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || 'N/A'}
        Address: ${data.address || 'N/A'}
        Message: ${data.message || 'N/A'}
      `, // Plain text body
      html: `
        <h3>New Book Interest</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Address:</strong> ${data.address || 'N/A'}</p>
        <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
      `, // HTML body
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log('Received book interest and sent email:', data);

    return new Response(JSON.stringify({
      message: 'Success!',
      data: data
    }), { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({
      message: 'Internal Server Error'
    }), { status: 500 });
  }
}
