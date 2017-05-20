import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

export default class App extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div>
         <Route  component={Layout} path="/" />
      </div>
    );
  }
}




