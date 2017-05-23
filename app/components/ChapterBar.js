import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';


class ChapterBar extends Component {
  constructor(props){
    super(props);
    this.course_id = location.pathname;
    console.log("ChapterBar: ctor => ", location.pathname);
  }
 
  render() {
    var self = this;
    console.log("ChapterBar: RENDER =>", this.props.chapters);
    if (!this.props.chapters.courseChapters) {
      return <p>No chapters published yet!</p>
    }
    var chps = this.props.chapters.courseChapters.course.chapters.map(function (chapter) {
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
                {renderSections(self.course_id,chapter)}
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
        <h2>{this.course_id}</h2>
        {chps}
      </div>
    );
  }
}


export default ChapterBar;