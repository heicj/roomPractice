import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './bedroom.css';

export default class Bedroom extends Component {

  static propTypes = {
    handleName: PropTypes.func,
    name: PropTypes.string
  };



  render(){
    const { name } = this.props;
    return (
      <section>

        <div 
          className='bedroom'>
        </div>

        <p>You come to and stumble to your feet. A room that is standing from sheer will surrounds you. You have no memory of your past or how you ened up in this room. Your name is starting to come back to you...it's....it's...that's right your name is {name}</p>

        <input onChange={this.props.handleName} type='text' placeholder='enter name' value={name}/>
            
        <Link to={'/diningroom'} className='link'>Leave the bedroom</Link>
          
      </section>
    );
  }
}