import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Searchbar2 from './Searchbar2'
import './Flight.css';

export class Flight extends Component {
    render() {
    return ( 
        <div className='background' className='box'>
        <Searchbar />
        <Searchbar2 />
        This is the Homepage
        </div>
     );
    }
}