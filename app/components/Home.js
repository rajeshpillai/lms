import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {featured: [
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
    ]};

  }
  render() {
    var featured = this.state.featured.map(function (course) {
        return( 
        <div className="col-md-4" key={course.id}>
           <h2><NavLink to={`/course/{course.slug}`}>{course.title}</NavLink></h2>
           <div>{course.desc}</div>
           <img src={course.cover_image} alt="cover image"/>
        </div>
        )
    });
    return (
      <div>
        {featured}
      </div>
    );
  }
}
export default Home;