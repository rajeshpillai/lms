import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import CourseService from '../services/CourseService';

class ChapterBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      course_id: "",
      chapters: []
    }
  }
  componentDidMount() {
      var course_id = 2;
      var chapters = CourseService.getChapters(course_id);
      // this.setState({
      //     course_id: course_id,
      //     chapters: chapters.chapters
      // });

      this.setState(function (prevState, props) {
        console.log("PROPS: ", props);
        return {
          course_id: course_id,
          chapters: chapters.chapters
        }
      });
  }

 
  render() {
    var self = this;
    var chps = this.state.chapters.map(function (chapter) {
      return (
        <div className="panel panel-default" key={`${chapter.id}`}>
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${chapter.id}`}>
              Chapter {chapter.srno}</a>
            </h4>
          </div>
          <div id={`collapse${chapter.id}`} className="panel-collapse collapse in">
            <div className="panel-body">
              <ol>
                {renderSections(self.state.course_id,chapter)}
              </ol>
            </div>
          </div>
        </div>
      );
    });

    function renderSections(courseId, chapter) {
        return (
          chapter.sections.map(function (section) {
             return (
                <li key={`${section.srno}`}>
                  <NavLink to={`/${courseId}/${chapter.id}/${section.srno}/`}>Section 1</NavLink>
                </li>
             );
          })
        );
    }

    return (
     <div className="panel-group chapter-bar" id="accordion">
        <h2>{this.state.chapters.course_id}</h2>
        {chps}
      </div>
    );
  }
}
export default ChapterBar;