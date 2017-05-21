import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import  {fetchFeaturedCourse} from '../reducers/reducers';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    props.fetchFeaturedCourse();
  }

  render() {
    console.log("Home: RENDER => ", this.props)  ;
    var state = this.props.featuredCourse;
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

function mapStateToProps(state){
  return {
        featuredCourse: state.featuredCourse,
        isFetching: state.isFetching
    }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchFeaturedCourse: () => {
      dispatch(fetchFeaturedCourse());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);