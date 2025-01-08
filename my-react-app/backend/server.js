const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

let messages = []; // Store messages temporarily

// POST endpoint to handle sending messages
app.post('/send', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  console.log('Message received:', message);
  messages.push(message); // Add message to the array
  res.status(200).json({ success: 'Message received successfully!' });
});

// GET endpoint to retrieve messages
app.get('/messages', (req, res) => {
  res.status(200).json(messages); // Return the array of messages
});

// Start the server
const PORT = 5176; // Changed the port to 5176
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
