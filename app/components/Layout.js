import React, { Component } from 'react';
import NavHeader from './common/NavHeader';
import NavBar from './common/NavBar';

class Layout extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-default navbar-static-top">
           <div className="container">
             <NavHeader />
             <NavBar />
           </div>
         </nav>
         <div className="container"> 
            {this.props.children}
         </div>
      </div>
    );
  }
}

export default Layout;