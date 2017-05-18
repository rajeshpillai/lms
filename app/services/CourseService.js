export default  {
    getCourseById: function (course_id) {
        return {
            id: 2,
            slug: "course-2",
            title: "Course 2",
            desc: "A great course 2",
            cover_image: "http://lorempixel.com/400/200/nature/"
        };
    },
    getChapters: function (course_id) {
        return {
            course_id: course_id,
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
    },
    getChapterByCourse: function (course_id, chapter_id) {
    return {
        id: 2,
        slug: "chapter-2",
        title: "Chapter 2",
        desc: "A great chapter 2",
        content: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aliquam, sint, suscipit cumque ad itaque repellendus ducimus at architecto iure enim. Harum, quas. Qui illum, quis commodi, cupiditate totam quae.</div>
        <div>Eligendi delectus, illo. Ipsa at aut nihil qui quod a corporis. Ipsam, soluta, commodi culpa corporis officiis illum eveniet, provident quia optio, minus assumenda ex error! Dolore explicabo, ex maiores.</div>
        <div>Expedita labore assumenda quia placeat eaque rerum, consequatur quo provident perferendis enim dicta ducimus delectus eligendi vero mollitia odio quidem accusamus maiores at ut, non, magnam ipsam consequuntur modi. Quo!</div>
        `
    };
}
};