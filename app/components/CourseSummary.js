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
                    {this.state.course.desc}
                    <br/>
                    <img src={this.state.course.cover_image} alt="cover image"/>
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
export default CourseSummary;
