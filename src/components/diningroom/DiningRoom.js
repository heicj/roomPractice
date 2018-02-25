import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './diningroom.css';



export default class DiningRoom extends Component {
  
  static propTypes ={
    name: PropTypes.string
  };

  render(){

    const { name } = this.props;
    
    return (
      <section>
        <div 
          className="dining">{name}
        </div>
        <p>{name}, you come across a dining room</p>
      </section>
    );
  }
}
