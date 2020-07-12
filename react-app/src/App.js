import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JsonFile from './components/JsonFile';
import './App.css';

class App extends Component{  

  const 


  render() {
    return(
      <Router>
        <Route exact path="/:event/:year/:month/:rows" component={JsonFile}/>
      </Router>
    )
  }
}

export default App;
