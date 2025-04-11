// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is RAM\'s Node.js app running in Dockerí´¥');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

