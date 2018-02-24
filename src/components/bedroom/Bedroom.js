import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './bedroom.css';

export default class Bedroom extends Component {

    state = {
      name: '',
      item: '',
    };

    handleChange = ({ target })=> {
      this.setState({ name: target.value });
    }

    render(){
      const { name } = this.state;
      return (
        <Router>
          <section>
            
            <div 
              className='bedroom'>
            </div>

            <p>You come to and stumble to your feet. A room that is standing from sheer will surrounds you. You have no memory of your past or how you ened up in this room. Your name is starting to come back to you...it's....it's...that's right your name is {name}</p>

            <input onChange={this.handleChange} type='text' placeholder='enter name' value={name} required/>
            
            <Link to={'/diningroom'} className='link'>Leave the bedroom</Link>
          </section>
        </Router>
      );
    }
}