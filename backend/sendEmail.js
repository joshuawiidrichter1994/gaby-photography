const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
require('dotenv').config();

console.log(
  'MAILGUN_API_KEY:',
  process.env.MAILGUN_API_KEY ? 'exists' : 'missing'
);
console.log(
  'MAILGUN_DOMAIN:',
  process.env.MAILGUN_DOMAIN ? 'exists' : 'missing'
);

const transporter = nodemailer.createTransport(
  mailgunTransport({
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  })
);

module.exports = async (req, res) => {
  console.log('Function invoked');

  // Set CORS headers to allow requests from specific origins
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://gaby-photography.vercel.app'
  );
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle only POST requests
  if (req.method !== 'POST') {
    console.log('Method not allowed');
    return res.status(405).send('Method Not Allowed');
  }

  console.log('Request method:', req.method);

  const { firstName, lastName, email, phone, message } = req.body;

  console.log('Request body:', req.body);

  const mailOptions = {
    from: 'joshuawiidrichter@gmail.com',
    to: 'gabyleaisabelle10@gmail.com',
    subject: 'Contact Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    res.status(500).send(`Error sending email: ${error.message}`);
  }
};
