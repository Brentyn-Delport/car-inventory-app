// server.js
// Creating the express server

// Using dotenv for password managament
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Creating an Express application
const app = express();

// Middleware to parse JSON bodies and handle CORS
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection URL
const dbUrl = process.env.dbUrl;

// Connect to MongoDB using Mongoose
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello from Car Inventory API!');
});

// Server Port
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
