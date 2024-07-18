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
  const userAgent = req.headers['user-agent'];
  console.log('Request origin:', origin);
  console.log('User-Agent:', userAgent);

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://gabyisabelle.com');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.setHeader(
      'Access-Control-Allow-Origin',
      origin || 'https://gabyisabelle.com'
    );
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).send();
  }

  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  console.log('Received request:', req.body);

  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    console.log('Bad request:', req.body);
    res.setHeader('Content-Type', 'application/json');
    return res
      .status(400)
      .json({ error: 'Bad Request: Missing required fields' });
  }

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
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    res.setHeader('Content-Type', 'application/json');
    return res
      .status(500)
      .json({ error: `Error sending email: ${error.message}` });
  }
};
