import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Searchbar2 from './Searchbar2'

export class Flight extends Component {
    render() {
    return ( 
        <div>
        <Searchbar />
        <Searchbar2 />
        This is the Homepage
        </div>
     );
    }
}