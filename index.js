const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})
.get('/bouygues', (req, res) => {
  res.header('Content-type', 'application/json');
  return res.json({ test: 'succes' });
});

app.listen(5000);
