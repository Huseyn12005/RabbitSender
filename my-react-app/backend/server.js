const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

let messages = [];

app.post('/send', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  console.log('Message received:', message);
  messages.push(message);
  res.status(200).json({ success: 'Message received successfully!' });
});


app.get('/messages', (req, res) => {
  res.status(200).json(messages); 
});

const PORT = 5176;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
