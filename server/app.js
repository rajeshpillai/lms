require('babel-register');

const express = require('express');
const path = require('path');
const app = express();

// Serve static assets
//app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve('public')));  // path eill be resolved from root
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(function (req, res, next) {
  next();
});
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  console.log("from server: ");
  res.render('layout/index', {
      title: "React with Express", 
      "body": "Hello LMS 2"
    });
});

module.exports = app;