import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { Home } from './Home';
import { FetchData } from './FetchData';
import { Counter } from './Counter';
import { Flight } from './Flight';
import { Route } from 'react-router';

export class Layout extends Component {
    displayName = Layout.name

    constructor(props) {
        super(props);

        this.state = {
            points: [
                { lat: 53.42728, lng: -6.24357 },
                { lat: 43.681583, lng: -79.61146 }

            ]
        };

        this.onGetPoints = this.onGetPoints.bind(this);
        this.getPoints = this.getPoints.bind(this);
    }

    onGetPoints = (p) => {
        this.state.points = p;
        console.log(p);
    };

    getPoints() {
        return this.state.points;
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={3}>
                        <NavMenu />
                    </Col>
                    <Col sm={9}>
                        <Route exact path='/' component={Home} />
                        <Route path='/counter' component={() => <Counter getData={this.getPoints} />} />
                        <Route path='/fetchdata' component={FetchData} />
                        <Route path='/flight' component={() => <Flight saveForm={this.onGetPoints}/>} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
