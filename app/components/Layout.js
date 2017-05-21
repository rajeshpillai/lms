import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import NavHeader from './common/NavHeader';
import NavBar from './common/NavBar';
import ChapterBar from './ChapterBar';
import HelpBar from './HelpBar';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import CourseSummary from './CourseSummary';
import ChapterView from './ChapterView';

class Layout extends Component {

  render() {
    return (
       <div className="container-fluid">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <NavHeader />
              <NavBar />
            </div>
          </nav>
          <div className="container-fluid"> 
              <div className="row">
                <div className="col-md-2">
                  <ChapterBar />
                </div>
                <div className="col-md-8 ">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={AboutUs} />
                  <Route exact path="/contact" component={ContactUs} />
                  <Route exact path="/:course_id" component={CourseSummary} />
                  <Route exact path="/:course_id/:chapter_id" component={ChapterView} />
                </div>
                <div className="col-md-2">
                  <HelpBar/>
                </div>
              </div>
              
          </div>
        </div>
    );
  }
}

export default Layout;