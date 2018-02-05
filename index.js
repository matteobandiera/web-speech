const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path('/views')));
app.use(express.static(path('/public')));

const server = app.listen(5000);
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
