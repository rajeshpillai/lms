import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className="active"><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
         
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="./"><span className="glyphicon glyphicon-bell"></span></a></li>
          <li><a href="#"><span className="glyphicon glyphicon-search"></span></a></li>
           <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              PROFILE <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Sign Out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;