import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Counter.css';

export class Counter extends Component {
    static defaultProps = {
    };

    constructor(props) {
        super(props);
        this.state = {
            coord: [
                { lat: 53.42728, lng: -6.24357 },
                { lat: 43.681583, lng: -79.61146 }
            ],
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        };
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div className='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBKLPbrmfqp6_7vlPuibIBeWFYbIlGAnJI' }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                    onGoogleApiLoaded={({ map, maps }) => this.renderPolylines(map, maps)}
                >
                </GoogleMapReact>
            </div>
        );
    }

    getMapBounds(map, maps, places) {
        const bounds = new maps.LatLngBounds();

        places.forEach((place) => {
            bounds.extend(new maps.LatLng(
                place.lat,
                place.lng,
            ));
        });
        return bounds;
    }
    renderPolylines(map, maps) {
        this.setState({ coord: this.props.getData() });
        console.log(this.props.getData())
        const bounds = this.getMapBounds(map, maps, this.state.coord);
        // Fit map to bounds
        map.fitBounds(bounds);

        let geodesicPolyline = new maps.Polyline({
            path: this.state.coord,
            geodesic: true,
            strokeColor: '#00a1e1',
            strokeOpacity: 1.0,
            strokeWeight: 4
        });
        for (let i = 0; i < this.state.coord.length; i++) {
            var marker = new maps.Marker({
                position: this.state.coord[i],
                map: map,
                title: 'Hello World!'
            });
        }
        geodesicPolyline.setMap(map);
    }
}
