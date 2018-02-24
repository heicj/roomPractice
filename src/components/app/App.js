import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Bedroom from '../bedroom/Bedroom.js';
import './app.css';


export default class App extends Component {

  render(){
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path='/' component={Bedroom}/>
            <Redirect to='/'/>
          </Switch>
        </main>
      </Router>
    );
  }
}