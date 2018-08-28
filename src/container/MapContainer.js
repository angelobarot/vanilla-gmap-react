import React, { Component } from 'react';
import { connect } from 'react-redux';
import BranchesNearYou from '../components/BranchesNearYou';
import BranchDetails from '../components/BranchDetails';
import 'antd/dist/antd.css';
import dispatcher from '../redux/dispatcher/dispatcher';
import state from '../redux/state/state';

const google = window.google;

class App extends Component {
    constructor() {
        super();
        this.state = {
            map: null
        };
        this.mapContainer = React.createRef();
        this.renderGoogleMap = this.renderGoogleMap.bind(this);
        this.success = this.success.bind(this);
        this.error = this.error.bind(this);
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(this.success, this.error);
    }

    componentDidMount() {
        this.renderGoogleMap();
    }

    componentWillReceiveProps(nextProps) {
        const { latitude, longitude } = nextProps.origin;
        if (this.state.map) {
            const position = new google.maps.LatLng(latitude, longitude);
            this.state.map.setCenter(position);
            this.state.map.setZoom(15);

            const map = this.state.map;
            new google.maps.Marker({ position, map });
        }
    }

    renderGoogleMap() {
        let map = new google.maps.Map(this.mapContainer.current, {
            center: {
                lat: this.props.origin.latitude,
                lng: this.props.origin.longitude
            },
            zoom: 8
        });

        this.setState({ map });
    }

    success(position) {
        const { latitude, longitude } = position.coords;
        this.props.getLngOrigin(longitude);
        this.props.getLatOrigin(latitude);
    }

    error(err) {
        console.log(err);
    }

    render() {
        return (
            <div className="App">
                <div className="left-content">
                    <BranchDetails
                        branchName="UnionBank Dela Rosa"
                        address="G/F, Insular Health Care Bldg., 167 Dela Rosa corner Legazpi Street, Legaspi Village, Makati City"
                        weekday="Monday to Friday 9:00 am - 3:00 pm"
                        weekend="Saturday: 10:00 am - 3:00 pm"
                        contactNumber="Tel: (02) 4785509 / (02) 5958239 / (02) 8080465"
                    />
                </div>
                <div className="map" ref={this.mapContainer} id="map"></div>
            </div>
        );
    }
}

export default connect(state, dispatcher)(App);
