const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use((req, res, next) => {
  res.json({ message: 'Hello from Express.js!' });
});

app.use((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // Add the necessary Permissions-Policy header here
  res.header('Permissions-Policy', 'origin-trial-controlled-features');
  next();
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
