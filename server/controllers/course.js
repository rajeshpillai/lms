var courses = [
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

var chapters = [
    { 
        course: {
            id: 1,
            chapters: [
                {
                    id: 1,
                    srno: 1,
                    title: "Chapter 1",
                    desc:  "Chapter 1 desc",
                    sections: [
                        {srno: 1, title: "Section 1"},
                        {srno: 2, title: "Section 2"},
                        {srno: 3, title: "Section 3"},
                        {srno: 4, title: "Section 4"}
                    ]
                },
                {           
                    id: 2,
                    srno: 2,         
                    title: "Chapter 2",
                    desc:  "Chapter 2 desc",
                    sections: [
                        {srno: 1, title: "Section 1"},
                        {srno: 2, title: "Section 2"},
                        {srno: 3, title: "Section 3"},
                        {srno: 4, title: "Section 4"}
                    ]
                },
            ]
        }
    }
];   

exports.getFeaturedCourse = function (req, res) {
    console.log(`COURSES: ${courses}`);
    res.json(courses);
}
exports.getCourseById = function (req, res) {
    var course_id = req.params.course_id;
    var course = courses.filter((course) => {
        if (course.slug === course_id) return course;
    });
    res.json({course: course[0]});
}

exports.getChaptersByCourseId = function (req, res) {
    var course_id = req.params.course_id;
    console.log(`Getting chapters for ${course_id}`);

    var courseChapters = chapters.filter((course) => {
        console.log(course.course.id);
        if (course.course.id == course_id) return course;
    });
    res.json({courseChapters: courseChapters[0]});
}