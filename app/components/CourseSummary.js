import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import  {fetchCourse} from '../reducers/reducers';
import {connect} from 'react-redux';


class CourseSummary extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
     console.log("FETCHING: ", this.props.match.params.course_id);
     this.props.fetchCourse(this.props.match.params.course_id);

  }

  render() {
    var course = this.props.course.course;
    console.log("CourseSummary: RENDER => ", this.props);
    if (course == null) {
        return <h3>Loading</h3>
    }
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#vid">Videos</a></li>
                <li><a data-toggle="tab" href="#book">Book</a></li>
                <li><a data-toggle="tab" href="#refs">References</a></li>
                <li><a data-toggle="tab" href="#conv">Conversations</a></li>
            </ul>

            <div className="tab-content">
                <div id="vid" className="tab-pane fade in active">
                    <h3>HOME</h3>
                    <h2>Course title: {this.props.match.params.course_id}</h2>
                    {course.desc}
                    <br/>
                    <img src={course.cover_image} alt="cover image"/>
                </div>
                <div id="book" className="tab-pane fade">
                    <h3>Menu 1</h3>
                    <p>Some content in menu 1.</p>
                </div>
                <div id="refs" className="tab-pane fade">
                    <h3>Menu 2</h3>
                    <p>Some content in menu 2.</p>
                </div>
                 <div id="conv" className="tab-pane fade">
                    <h3>Conversations</h3>
                    <p>Some content in menu 2.</p>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps(state){
  console.log("mapStateToProps: ", state);
  return {
        course: state.course,
        isFetching: state.isFetching
    }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCourse: (course_id) => {
      dispatch(fetchCourse(course_id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseSummary);
