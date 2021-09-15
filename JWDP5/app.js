const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const cameraRoutes = require('./routes/camera');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

const mytestpath = path.join(__dirname, '../Orinoco/');

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/Orinoco', express.static(mytestpath));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Orinoco/', 'index.html'));
});

app.use('/', express.static(mytestpath));

app.use(bodyParser.json());

app.use('/api/cameras', cameraRoutes);

module.exports = app;
