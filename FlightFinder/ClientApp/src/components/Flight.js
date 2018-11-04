import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Searchbar from './Searchbar';
import Searchbar2 from './Searchbar2'

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
            <Form>
                <FormGroup>
                    <Label for="exampleSearch">Start</Label>
                    <Input type="search" name="search" id="exampleSearch" value={this.state.Searchbar} onChange={this.updateSearch1} placeholder="Searchbar1" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSearch">Destination</Label>
                    <Input type="search" name="search" id="exampleSearch" value={this.state.Searchbar2} onChange={this.updateSearch2} placeholder="Searchbar2" />
                </FormGroup>
                This is the Homepage
            </Form>
            <button onClick={this.handleClick}>
                Click me
            </button>
        </div>

     );
    }
}