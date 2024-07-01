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
  useCreateIndex: true,
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

app.post('/subscribe', async (req, res) => {
  const email = req.body.email;
  const newSubscriber = new Subscriber({ email });

  try {
    await newSubscriber.save();
    res.status(201).json({ message: 'Subscription successful!' });
  } catch (err) {
    res
      .status(400)
      .json({
        error: 'Subscription failed. Email might already be subscribed.',
      });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
