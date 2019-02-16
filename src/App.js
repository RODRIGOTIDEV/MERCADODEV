import React, { Component } from 'react';
import logo from './logo.svg';
import base from './base'
import Footer from './Footer'
import Home from './Home'
import {BroweseRouter as Router, Route} from 'react-router-dom'


class App extends Component {
  


  render() {
    let index = 0
    return (
      <Router>
      <div className="App">
        <Route path='/' exact component={Home} />
        <Route path='/teste' exact component={teste} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
