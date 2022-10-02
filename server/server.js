'use strict';

const path = require('path'); // Path for Heroku
const express = require('express');

// Constants
// const PORT = 8080;
// const HOST = '0.0.0.0';
const PORT = process.env.PORT || 3001;

// App
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../react-kitchen/build')));

app.get('/api', (req, res) => {
  // res.send('Hello World');
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-kitchen/build', 'index.html'));
});

// app.listen(PORT, HOST, () => {
//   console.log(`Running on http://${HOST}:${PORT}`);
app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
