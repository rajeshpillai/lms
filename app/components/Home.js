import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import {store, featuredCourse} from '../reducers/reducers';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log("ROOT: ", store);

    store.dispatch(featuredCourse());
    this.state = store.getState();

    console.log("FEATURED: ", this.featured);
  }
  render() {
    var featured = this.state.home.map(function (course) {
        return( 
        <div className="col-md-4" key={course.id}>
           <h2><NavLink to={`/${course.slug}`}>{course.title}</NavLink></h2>
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