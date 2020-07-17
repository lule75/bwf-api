import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JsonFile from './components/json-display/JsonFile';
import Main from './components/Main';
import Error404 from './components/Error404';
import './App.css';

class App extends Component{  


  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/:event/:year/:week/:rows" component={JsonFile}/>
          <Route exact path="/:event" component={JsonFile}/>
          <Route exact path="/:event/:rows" component={JsonFile}/>
          <Route exact path="/:event/:year/:week" component={JsonFile}/>
          <Route component={Error404} status={404}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
