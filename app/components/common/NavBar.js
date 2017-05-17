import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className="active"><Link to="#">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              
            </ul>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="../navbar/">Default</a></li>
          <li className="active"><a href="./">Static top <span className="sr-only">(current)</span></a></li>
          <li><a href="#">Fixed top</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;