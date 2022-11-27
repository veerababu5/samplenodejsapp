'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:blue;">Welcome to Supplier Quality Assessment version: 01</h1> \n');
  res.send('<h2 style="color:red;">Version:01</h2> \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
