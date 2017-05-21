require('babel-register');

const express = require('express');
const path = require('path');
const app = express();
const cluster = require('cluster');

app.use(express.static(path.resolve('public')));  // path eill be resolved from root
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(function (req, res, next) {
  next();
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});



// Always return the main index.html, so react-router render the route in the client


require('./router')(app);