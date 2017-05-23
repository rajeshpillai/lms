import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import  {fetchCourse} from '../reducers/reducers';
import {connect} from 'react-redux';
import ChapterBar from './ChapterBar';
import {fetchChapters} from '../reducers/reducers';
class CourseSummary extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
     var course_id = this.props.match.params.course_id;
     console.log("FETCHING: ", course_id);
     this.props.fetchCourse(course_id);
     this.props.fetchChapters(course_id);
  }

  render() {
    var course = this.props.course;
    var chapters = this.props.chapters;
    console.log("CourseSummary: RENDER => ", course, chapters);
   
    if (!(course &&  course.course)) {
        return <h3>Course Loading</h3>
    } 

    course = course.course;

    var chapterBar;
    console.log("CHAPTER fetching: ", chapters.isFetching);
    if (chapters.isFetching == true) {
        chapterBar =  <p>LOADING chapters...</p>
    } else {
        console.log("Loading CHAPTER-BAR...");
        chapterBar = <ChapterBar chapters={chapters.chapters} />
    }
    return (
        <div className="row">
            <div className="col-md-2">
               {chapterBar}
            </div>
            <div className="col-md-8">
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
                        {course.desc} - {JSON.stringify(course)}
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
        </div>
    );
  }
}

function mapStateToProps(state){
  console.log("mapStateToProps: ", state);
  return {
        course: state.course,
        isFetching: state.isFetching,
        chapters: state.chapters
    }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCourse: (course_id) => {
      dispatch(fetchCourse(course_id));
    },
    fetchChapters: (course_id) => {
      dispatch(fetchChapters(course_id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseSummary);
