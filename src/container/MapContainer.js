import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin, Icon } from 'antd';
import BranchesNearYou from '../components/BranchesNearYou';
import BranchDetails from '../components/BranchDetails';
import 'antd/dist/antd.css';
import dispatcher from '../redux/dispatcher/dispatcher';
import state from '../redux/state/state';

const google = window.google;

const antIcon = <Icon type="compass" style={{ fontSize: 50, fontWeight: 'bold' }} spin />;
class App extends Component {

    constructor() {
        super();
        this.state = {
            infowindow: null
        }
        this.mapContainer = React.createRef();
        this.renderGoogleMap = this.renderGoogleMap.bind(this);
        this.success = this.success.bind(this);
        this.error = this.error.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.callback = this.callback.bind(this);
    }

    componentWillMount() {
        this.props.toggleLoading();
        this.getPosition();
    }

    getPosition() {
        navigator.geolocation.getCurrentPosition(this.success, this.error);
    }

    componentDidMount() {
        this.renderGoogleMap();
    }


    componentWillReceiveProps(nextProps) {
        const { latitude, longitude } = nextProps.origin;
        if (this.props.map) {
            const position = new google.maps.LatLng(latitude, longitude);
            this.props.map.setCenter(position);
            this.props.map.setZoom(15);

            const map = this.props.map;
            const marker = new google.maps.Marker({ 
                position, 
                map,
                title: "Click to get branch details"
            });

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
        this.props.getMap(map);
    }

    success(position) {
        const { latitude, longitude } = position.coords;
        this.props.getLngOrigin(longitude);
        this.props.getLatOrigin(latitude);
        let geocoder = new google.maps.Geocoder();
        let infowindow = new google.maps.InfoWindow();
        this.reverseGeocodeOrigin(geocoder, this.props.map, infowindow);
        this.getNearby();
        this.props.stopLoading();
    }

    error(err) {
        console.log(err);
    }

    getNearby() {
        let location = {lat: this.props.origin.latitude, lng: this.props.origin.longitude}
        this.setState({
            infowindow: new google.maps.InfoWindow()
        });
        let service = new google.maps.places.PlacesService(this.props.map);
        service.nearbySearch({
            location,
            radius: 800,
            name: ['Unionbank'],
            type: ['banks', 'atm']
        }, this.callback);
    }

    callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.map((result) => {
                this.props.getBranches(result);
                this.createMarker(result);
                return result;
            });
        }
    }
    
    createMarker(place) {
        let icon = {
            url: 'https://www.unionbankph.com/images/icons/unionbankonline.jpg',
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };
        let marker = new google.maps.Marker({
            map: this.props.map,
            position: place.geometry.location,
            icon
        });

        google.maps.event.addListener(marker, 'click', () => {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            this.props.getLatDestination(lat);
            this.props.getLngDestination(lng);
            this.props.getAddressDestination(place.vicinity);
            this.props.toggleBranchInfo();
            console.log("Origin", this.props.origin);
            console.log("Destination", this.props.destination);
        });
    }

    reverseGeocodeOrigin(geocoder, map, infowindow) {
        let latlng = { lat: parseFloat(this.props.origin.latitude), lng: parseFloat(this.props.origin.longitude) };
        geocoder.geocode({'location': latlng}, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.props.map.setZoom(15);
                    let marker = new google.maps.Marker({
                        position: latlng,
                        map: this.props.map
                    });
                    infowindow.setContent(results[0].formatted_address);
                    infowindow.open(this.props.map, marker);
                    this.props.getAddressOrigin(results[0].formatted_address);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }

    render() {

        return (
            <div className="App">
                <div className="left-content">
                    {
                        this.props.directionToggled ?
                            <BranchesNearYou getPosition={this.getPosition} /> :
                            <div />
                    }
                    {
                        this.props.transitToggled ?
                            <BranchesNearYou directionShow /> :
                            <div />
                    }
                    {
                        this.props.branchInfoToggled ?
                            <BranchDetails
                                branchName="UnionBank Dela Rosa"
                                address="G/F, Insular Health Care Bldg., 167 Dela Rosa corner Legazpi Street, Legaspi Village, Makati City"
                                weekday="Monday to Friday 9:00 am - 3:00 pm"
                                weekend="Saturday: 10:00 am - 3:00 pm"
                                contactNumber="Tel: (02) 4785509 / (02) 5958239 / (02) 8080465"
                            /> :
                            <div />
                    }

                </div>
                {
                    this.props.loading ?
                        <div className="map-loading">
                            <Spin indicator={antIcon} />
                        </div>
                        :
                        <div className="map" ref={this.mapContainer} id="map"></div>
                }
                
                
            </div>
        );
    }
}

export default connect(state, dispatcher)(App);
