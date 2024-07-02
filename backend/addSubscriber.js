const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI;
console.log(`Connecting to MongoDB with URI: ${uri}`);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB database connection established successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// MongoDB Schema and Model
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Routes
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  console.log(`Received subscription request with email: ${email}`);

  if (!email) {
    console.log('Email is required');
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    console.log('Subscription successful');
    res.status(201).json({ message: 'Subscription successful!' });
  } catch (err) {
    console.error('Error saving subscriber:', err.message);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// Handle other HTTP methods or routes
app.get('/api/subscribe', (req, res) => {
  res.status(405).json({ error: 'Method Not Allowed' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
