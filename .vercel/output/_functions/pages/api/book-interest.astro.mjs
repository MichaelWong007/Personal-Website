import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    if (!data.name || !data.email) {
      return new Response(JSON.stringify({
        message: "Name and Email are required."
      }), { status: 400 });
    }
    const transporter = nodemailer.createTransport({
      host: undefined                          || "smtp.126.com",
      port: parseInt(undefined                          || "465"),
      secure: true,
      // true for 465, false for other ports
      auth: {
        user: undefined                         ,
        // Your email address
        pass: undefined                         
        // Your email password or app password
      }
    });
    const mailOptions = {
      from: undefined                         ,
      // Sender address
      to: "michaelwong007@126.com",
      // Receiver address
      subject: `New Book Interest from ${data.name}`,
      // Subject line
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || "N/A"}
        Address: ${data.address || "N/A"}
        Message: ${data.message || "N/A"}
      `,
      // Plain text body
      html: `
        <h3>New Book Interest</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Address:</strong> ${data.address || "N/A"}</p>
        <p><strong>Message:</strong> ${data.message || "N/A"}</p>
      `
      // HTML body
    };
    await transporter.sendMail(mailOptions);
    console.log("Received book interest and sent email:", data);
    return new Response(JSON.stringify({
      message: "Success!",
      data
    }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({
      message: "Internal Server Error"
    }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
