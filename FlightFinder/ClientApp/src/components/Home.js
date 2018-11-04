import React, { Component } from 'react';
import WorldClock from './WorldClock';
import ReactDOM from 'react-router-dom';
export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <WorldClock className='world'/>
        
      </div>
    );
  }
}
