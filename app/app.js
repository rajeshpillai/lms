import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

export default class App extends Component {
  render() {
    return (
     <div>
        <Route  component={Layout} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
  </div>
    );
  }
}




