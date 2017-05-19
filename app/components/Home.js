import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import  {store,  fetchFeaturedCourse} from '../reducers/reducers';


class Home extends Component {
  constructor(props) {
    super(props);
    console.log("HOME:ctor =>");
    this.state ={
      featuredCourse: {
        featuredCourse: [],
        isFetching: true
      },
     
    };
   
    this._isMounted = true;

    console.log("HOME =>");
    var self = this;
    fetchFeaturedCourse();
    store.subscribe(function () {
        console.log("STATE: ", store.getState());
        var s = store.getState();
        self.data = { featuredCourse: store.getState().featuredCourse};

        self.setState(function (prevState, props) {
          return store.getState().featuredCourse;
        });
    });
  }

  componentDidMount() {
    
    
  }
  
  componentWillUnMount() {
     console.log("HOME:componentWillUnMount =>");
    this._isMounted = false;
  }
  render() {
    console.log("RENDER: ", this.state);
    if (this.state.featuredCourse.isFetching) {
      return <h3>Loading</h3>
    }
    var featured = this.state.featuredCourse.map(function (course) {
        return( 
        <div className="col-md-4" key={course.id}>
          <div className="thumbnail">
           <h2><NavLink to={`/${course.slug}`}>{course.title}</NavLink></h2>
           <div>{course.desc}</div>
           <img src={course.cover_image} alt="cover image"/>
           </div>
        </div>
        )
    });
    return (
      <div className="row">
        {featured}
      </div>
    );
  }
}
export default Home;