require('babel-register');

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve('public')));  // path eill be resolved from root
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(function (req, res, next) {
  next();
});

app.get("/course/featured", (req, res) => {
  console.log("RECEIVED: ");
  var featuredCourse = [
      {
          id: 1,
          slug: "course-1",
          title: "Course 1",
          desc: "A great course",
          cover_image: "http://lorempixel.com/400/200/nature/"
      },
      {
          id: 2,
          slug: "course-2",
          title: "Course 2",
          desc: "A great course 2",
          cover_image: "http://lorempixel.com/400/200/nature/"
      },
      {
          id: 3,
          slug: "course-3",
          title: "Course 3",
          desc: "A great course 3",
          cover_image: "http://lorempixel.com/400/200/nature/"
      }
  ];
  res.json(featuredCourse);
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