import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchChapters} from '../reducers/reducers';


class ChapterBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      course_id: "",
      chapters: []
    }
  }
  componentDidMount() {
      if (!this.props.match) return;
      var course_id =  this.props.match.params.course_id;
      this.props.fetchChapters(course_id);
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

function mapStateToProps(state){
  console.log("mapStateToProps: ", state);
  return {
        courseChapters: state.courseChapters,
        isFetching: state.isFetching
    }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCourseChapters: (course_id) => {
      dispatch(fetchCourseChapters(course_id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterBar);