import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Input, Icon, Button, Menu, Dropdown } from 'antd';
import GetDirection from './common/GetDirection';
import state from '../redux/state/state';
import dispatcher from '../redux/dispatcher/dispatcher';

const ButtonGroup = Button.Group;

class BranchesNearYou extends Component {
    constructor() {
        super();
        this.handleTravelTypeChange = this.handleTravelTypeChange.bind(this);
    }

    handleMenuClick = (e) => {
        this.props.getAddressDestination(e.item.props.value.vicinity);
        this.props.getLatDestination(e.item.props.value.geometry.location.lat());
        this.props.getLngDestination(e.item.props.value.geometry.location.lng());
    }

    renderMenu() {
            console.log("Origin", this.props.origin);
            console.log("Destination", this.props.destination);
            return (
                <Dropdown
                    overlay={
                        <Menu style={{ maxHeight: 500, overflow: 'auto' }}>
                            {
                                this.props.branches.map((branch) => {
                                    return <Menu.Item 
                                        onClick={this.handleMenuClick}
                                        key={branch.id} value={branch} 
                                        style={{ maxWidth: 390, overflow: 'hidden', textOverflow: 'ellipsis' }}
                                        >
                                            <Icon type="environment" />{branch.vicinity}
                                        </Menu.Item>
                                })
                            }

                        </Menu>
                    } 
                    trigger={['click']}
                >
                    <Button>
                        {this.props.destination.address} <Icon type="down" />
                    </Button>
                </Dropdown>
            );
    }

    handleClose = () => {
        this.props.toggleDirection();
    }

    handleTextChange = (e) => {
        this.props.getAddressOrigin(e.target.value);
    }

    handleTravelTypeChange(value) {
        this.props.getTravelType(value);
    }

    render() {
        return (
            <div className="branchesNearYou">
                {
                    this.props.directionShow ?
                        <div className="get-direction-buttons">
                            <div className="transportation-buttons">
                                <ButtonGroup>
                                    <Button onClick={() => this.handleTravelTypeChange('WALKING')} value="WALKING">
                                        <img src={require('../assets/images/walking.png')} alt="walking" />
                                    </Button>
                                    <Button onClick={() => this.handleTravelTypeChange('DRIVING')} value="DRIVING">
                                        <img src={require('../assets/images/car.png')} alt="driving" />
                                    </Button>
                                    <Button onClick={() => this.handleTravelTypeChange('TRANSIT')} value="TRANSIT">
                                        <img src={require('../assets/images/bus.png')} alt="transit" />
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <div className="close-btn">
                                <Button icon="close" onClick={this.handleClose}></Button>
                            </div>
                        </div>
                        :
                        <h2 className="bnyHeader">Branches near you</h2>
                }
                <div className="origin">
                    <p>Enter address of origin (e.g. Street, City)</p>
                    <Input
                        className="originInput"
                        id="pac-input"
                        value={this.props.origin.address}
                        onChange={this.handleTextChange}
                        placeholder="Choose starting point"
                        suffix={<Icon type="environment-o" onClick={this.props.getPosition} className="pin-search" style={{ color: '#EC602C', fontSize: 24 }} />}
                    />
                </div>
                <div className="destination">
                    <p>Select branch</p>
                    {this.renderMenu()}
                </div>
                {
                    this.props.directionShow ?
                        <div /> :
                        <div className="button-container">
                            <GetDirection />
                        </div>
                }
            </div>
        )
    }
}

export default connect(state, dispatcher)(BranchesNearYou);
