const express = require('express');
const path = require('path');

const app = express();

// Serve static assets
//app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve('public')));  // path eill be resolved from root

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  //res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  res.render('layout/blank', {title: "React with Express", "body": "Hello from EJS"});
});

module.exports = app;