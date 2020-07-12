import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JsonFile from './components/json-display/JsonFile';
import Main from './components/Main'
import './App.css';

class App extends Component{  


  render() {
    return(
      <Router>
        <Route exact path="/" component={Main}/>
        <Route exact path="/:event/:year/:month/:rows" component={JsonFile}/>
      </Router>
    )
  }
}

export default App;
