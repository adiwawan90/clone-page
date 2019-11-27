import React, { Component } from 'react';
import Blogs from './Home/Blogs';
import Home from './Home/Home';
import Gallery from '../prop/Gallery';
import Show from '../prop/Showhide';
import Form from '../event/Event';
import '../style/style.css';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render() {
    return (
      <Router>
      <div className="header">
        <div className="container warna">
          <nav className="navbar navbar-expand-lg navbar-light warna">
            <Link className="navbar-brand" to="#"><img className="logo" src={require('../logo/logo-indihome.png')} alt="logo"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Togle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" id="navbarDropdown" >Home</Link>
                  {/*<div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/">Home</Link>
    <Link className="dropdown-item" to="/grid">Partnership</Link>
                  </div>*/}
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/blogs" id="navbarDropdown" >Blogs</Link>
                  {/*<div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/gallery">Action</Link>
                    <Link className="dropdown-item" to="#">Another Action</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">Something else here</Link>
                </div>*/}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="navbarDropdown" to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="/show" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kontak</Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/event">Pesan</Link>
                    <Link className="dropdown-item" to="/show">About Me</Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          {/*end navbar*/}
        </div>
        {/*end container*/}
        <div className="">
            <Route path="/" exact component={Home}/>
            <Route path="/blogs"  component={Blogs}/>
            <Route path="/gallery"  component={Gallery}/>
            <Route path="/event"  component={Form}/>
            <Route path="/show"  component={Show}/>
         </div>
      </div>
      </Router>
      // end header
    );
  }
}

export default App;
