const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

const PORT = (process.env.PORT || 5000);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})
.get('/bouygues', (req, res) => {
  res.header('Content-type', 'application/json');
  return res.json({ test: 'succes' });
});

app.listen(PORT);
