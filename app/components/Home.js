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
  }

  componentDidMount() {
    console.log("componentDidMount:=>"); 
    store.dispatch(fetchFeaturedCourse());
    this.unsubscribe = store.subscribe(this.handlechange.bind(this)); 
  }

  handlechange() {
    console.log("STATE CHANGED: ", store.getState());
    this.forceUpdate();
  }

  componentWillMount() {
    console.log("componentWillMount:=>"); 
  }

  componentWillUnMount() {
     console.log("HOME:componentWillUnMount =>");
     this.unsubscribe();
  }

  shouldComponentUpdate ( newProps, newState ) {
    console.log("shouldComponentUpdate: newProps: ", newProps);
    return true;
  }

  render() {
    var state = store.getState().featuredCourse;
    console.log("RENDER: ", state);
    if (state.isFetching) {
      return <h3>Loading</h3>
    }
    var featured = state.featuredCourse.map(function (course) {
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