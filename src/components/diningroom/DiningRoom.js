import React, { Component } from 'react';
import PropTypes from 'prop-types';



export default class DiningRoom extends Component {
  
  static propTypes ={
    name: PropTypes.string
  };

  render(){

    const { name } = this.props;
    
    return (
      <div>{name}, you've made it to the dining room.</div>
    );
  }
}
