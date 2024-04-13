const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'joshuawiidrichter@gmail.com', // Replace with your Gmail address
    pass: 'JoshuaWiidRichter!#@$d', // Replace with your Gmail password or app-specific password
  },
});

// Route to handle form submission and send email
app.post('/api/send-email', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Compose email message
  const mailOptions = {
    from: 'joshuawiidrichter@gmail.com',
    to: 'gabyleaisabelle10@gmail.com', // Replace with the recipient's email address
    subject: 'Contact Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred while sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
