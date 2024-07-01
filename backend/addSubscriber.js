// /backend/addSubscriber.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Handle POST requests to /subscribe
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json({ message: 'Subscription successful!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// Optionally handle other HTTP methods or routes
// Example: Handle GET request to /subscribe
app.get('/subscribe', (req, res) => {
  res.status(405).json({ error: 'Method Not Allowed' });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
