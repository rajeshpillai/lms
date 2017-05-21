exports.getFeaturedCourse = function (req, res) {
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
}