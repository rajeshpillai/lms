var courseController = require("./controllers/course");

module.exports = function (app) {
  app.get("/course/featured", courseController.getFeaturedCourse);
  app.get('*', (req, res) => {
    console.log("from server: ");
    res.render('layout/index', {
        title: "React with Express", 
        "body": "Hello LMS 2"
        });
    });
}