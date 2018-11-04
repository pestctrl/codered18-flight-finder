import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Geosuggest from 'react-geosuggest';
import {Counter} from './Counter';
import Geocode from "react-geocode";

import Searchbar from "./Searchbar";
import Searchbar2 from "./Searchbar2";
import "./Flight.css";
Geocode.setApiKey("AIzaSyBKLPbrmfqp6_7vlPuibIBeWFYbIlGAnJI");


export class Flight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Searchbar: "",
      Searchbar2: "",
      Geobar:"",
      PassengerCount: 1
    };

    this.updateSearch1 = this.updateSearch1.bind(this);
    this.updateSearch2 = this.updateSearch2.bind(this);
    this.updateGeobar = this.updateGeobar.bind(this);
    this.updatePassengerCount = this.updatePassengerCount.bind(this);
  }
  handleClick = () => {
    console.log(
      "this is:",
      this.state.Searchbar,
      this.state.Searchbar2,
      this.state.Geobar,
      this.state.PassengerCount
      );

      let formData = new FormData();
      formData.append("start", this.state.Searchbar);
      formData.append("end", this.state.Searchbar2);

      fetch('api/flights/getflights', {
          method: 'POST',
          body: formData
      })
          .then(response => response.json())
          .then(data => {
              let points = new Array(data.airports.length);
              console.log(data.airports);
              for (let i = 0; i < data.airports.length; i++) {
                  Geocode.fromAddress(data.airports[i]).then(
                      response => {
                          const { lat, lng } = response.results[0].geometry.location;
                          points[i] = {
                              lat: lat,
                              lng: lng
                          };
                      },
                      error => {
                          console.error(error);
                      });
                  
              }

              // Somehow pass the points array to the controller
              this.props.saveForm(points);
          });

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
  updatePassengerCount(evt) {
      console.log(evt.target.value);
    this.setState({
      PassengerCount: evt.target.value
    });
  }
  updateGeobar(evt) {
    console.log(evt.target.value);
     this.setState({
         Geobar: evt.target.value
       });
  }
  render() {
    return (
      <div>
          <Counter className='map'/>
        <Geosuggest className='geo'
              ref={el=>this._geoSuggest=el}
            //   fixtures={fixtures}
              type="search"
              name="search"
              id="exampleSearch"
              value={this.state.Geobar}
              onSuggestSelect={this.updateGeobar}
              placeholder="Where are you leaving from..."
            />

        <Form className="box">
          <FormGroup className="move" className="col-md-8">
            <Label for="exampleSearch" className="label">
              Origin
            </Label>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              value={this.state.Searchbar}
              onChange={this.updateSearch1}
              placeholder="Where are you leaving from..."
            />
          </FormGroup>
          <FormGroup className="move" className="col-md-8">
            <Label for="exampleSearch" className="label">
              Destination
            </Label>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              value={this.state.Searchbar2}
              onChange={this.updateSearch2}
              placeholder="Where are you headed..."
            />
          </FormGroup>
          <FormGroup className="move" className="col-md-8">
            <Label for="exampleSelect" className="label">
              Passengers
            </Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              value={this.state.PassengerCount}
              onChange={this.updatePassengerCount}
             >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Input>
          </FormGroup>
          {/* This is the Homepage */}
        </Form>
        <button onClick={this.handleClick} className="button">
          Submit
        </button>
      </div>
    );
  }
}
