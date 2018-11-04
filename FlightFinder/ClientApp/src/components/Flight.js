import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Searchbar from './Searchbar';
import Searchbar2 from './Searchbar2'
import './Flight.css';

export class Flight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Searchbar: '',
            Searchbar2:''
        };

        this.updateSearch1 = this.updateSearch1.bind(this);
        this.updateSearch2 = this.updateSearch2.bind(this);
    }
    handleClick = () => {
        console.log('this is:', this.state.Searchbar, this.state.Searchbar2);
    }
    updateSearch1(evt) {
        this.setState({
            Searchbar: evt.target.value
        });
    }
    updateSearch2(evt) {
        this.setState({
            Searchbar2: evt.target.value
        });
    }
    render() {
    return ( 
        <div>
            <Form className='box'>
                <FormGroup className='move' className='col-md-8'>
                    <Label for="exampleSearch" className='label'>Origin</Label>
                    <Input type="search" name="search" id="exampleSearch" value={this.state.Searchbar} onChange={this.updateSearch1} placeholder="Where are you leaving from..." />
                </FormGroup>
                <FormGroup className='move' className='col-md-8'>
                    <Label for="exampleSearch" className='label'>Destination</Label>
                    <Input type="search" name="search" id="exampleSearch" value={this.state.Searchbar2} onChange={this.updateSearch2} placeholder="Where are you headed..." />
                </FormGroup>
                This is the Homepage
            </Form>
            <button onClick={this.handleClick} className='button'>
                Submit
            </button>
        </div>

     );
    }
}
