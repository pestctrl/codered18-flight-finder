import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export class Counter extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBKLPbrmfqp6_7vlPuibIBeWFYbIlGAnJI' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onGoogleApiLoaded={({ map, maps }) => this.renderPolylines(map, maps)}
                >
                    
                </GoogleMapReact>
            </div>
        );
    }
    renderPolylines(map, maps) {
        let geodesicPolyline = new maps.Polyline({
            path: [
                { lat: 53.42728, lng: -6.24357 },
                { lat: 43.681583, lng: -79.61146 }
            ],
            geodesic: true,
            strokeColor: '#00a1e1',
            strokeOpacity: 1.0,
            strokeWeight: 4
        });
        geodesicPolyline.setMap(map);
    }
}