import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CourseService from '../services/CourseService';

class ChapterView extends Component {
  constructor(props) {
      super(props);
      this.state = {
          course: {
          }
      }
  }

  componentDidMount() {
     var course = CourseService.getCourseById(this.props.match.params.course_id);
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
           CHAPTER GOES HERE
        </div>
    );
  }
}
export default ChapterView;
