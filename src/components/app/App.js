import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Bedroom from '../bedroom/Bedroom.js';
import DiningRoom from '../diningroom/DiningRoom';
import './app.css';
import Test from '../Test';


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
            <Route exact path="/" render={ () => <Bedroom handleName={this.handleName} name={this.state.name}/>}/>
            <Route path="/diningroom" render={ () => <DiningRoom name={this.state.name}/>}/>
            <Route path="/test" component={Test}/>
            <Redirect to="/"/>
          </Switch>
        </main>
      </Router>
    );
  }
}