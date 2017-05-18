import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CourseService from '../services/CourseService';

class CourseSummary extends Component {
  constructor(props) {
      super(props);
      this.state = {
          course: {
          }
      }
  }

  componentDidMount() {
     var course = CourseService.getById(this.props.match.params.course_id);
     console.log(course);
      this.setState({
          course: course,
          chapters: {
              course_id: course.id
          }
      });
  }

  render() {
    return (
        <div>
             <h2>Course title: {this.props.match.params.course_id}</h2>
             {this.state.course.desc}
             <br/>
             <img src={this.state.course.cover_image} alt="cover image"/>
        </div>
    );
  }
}
export default CourseSummary;
