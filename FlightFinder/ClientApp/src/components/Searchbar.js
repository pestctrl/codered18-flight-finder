import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Searchbar extends React.Component {
    render() {
      return (
        <Form>
          <FormGroup>
            <Label for="exampleSearch">Origin</Label>
            <Input type="search" name="search" id="exampleSearch" placeholder="Where are you leaving from..." />
          </FormGroup>
        </Form>
      );
    }
  }