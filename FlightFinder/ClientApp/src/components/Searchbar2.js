import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Searchbar2 extends React.Component {
    render() {
      return (
        <Form>
          <FormGroup>
                  <Label for="exampleSearch">Destination</Label>
                  <Input type="search" name="search" id="exampleSearch" value={this.state.Searchbar2} placeholder="Searchbar2" />
          </FormGroup>
        </Form>
      );
    }
  }