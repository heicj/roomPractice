import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Bedroom from '../bedroom/Bedroom.js';
import './app.css';


export default class App extends Component {

  state = {
    name: ''
  };

  handleName = ({ target })=> {
    this.setState({ name: target.value });
  };

  render(){
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path='/' render={ () => <Bedroom handleName={this.handleName} name={this.state.name}/>}/>
            <Redirect to='/'/>
          </Switch>
        </main>
      </Router>
    );
  }
}