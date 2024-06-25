const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
require('dotenv').config();

const transporter = nodemailer.createTransport(
  mailgunTransport({
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  })
);

const allowedOrigins = ['https://gabyisabelle.com'];

module.exports = async (req, res) => {
  console.log('Function invoked');

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://gabyisabelle.com');
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).send();
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  console.log('Received request:', req.body);

  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: 'joshuawiidrichter@gmail.com',
    to: 'gaby@isabelle.co.za',
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
    res.status(500).send('Error sending email');
  }
};
