import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Input, Icon, Button, Menu, Dropdown } from 'antd';
import {
    toggleLoading,
    stopLoading,
    getLatOrigin,
    getLngOrigin,
    getAddressOrigin,
    getLatDestination,
    getLngDestination,
    getAddressDestination,
    getBranches
} from '../redux/actions/creators';

const menu = (
    <Menu>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
);


class BranchesNearYou extends Component {

    componentDidMount = () => {
        this.props.toggleLoading();
    };

    
    
    render() {
        return (
            <div className="branchesNearYou">
                <h2 className="bnyHeader">Branches Near You</h2>
                <div className="origin">
                <p>Enter address of origin (e.g. Street, City)</p>
                    <Input 
                        className="originInput" 
                        placeholder="Choose starting point"
                        suffix={<Icon type="environment-o" className="pin-search" style={{ color: '#EC602C', fontSize: 24 }} /> } 
                    />
            </div>
            <div className="destination">
                <p>Select branch</p>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button>
                            Nearby branch by default <Icon type="down" />
                        </Button>
                    </Dropdown>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    const { loading } = state.loadingReducer;
    const { branches, origin, destination } = state.coordinatesReducer;
    return {
        loading,
        branches,
        origin,
        destination
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleLoading: () => {
            dispatch(toggleLoading())
        },
        stopLoading: () => {
            dispatch(stopLoading())
        },
        getAddressOrigin: (address) => {
            dispatch(getAddressOrigin(address))
        },
        getLngOrigin: (longitude) => {
            dispatch(getLngOrigin(longitude))
        },
        getLatOrigin: (latitude) => {
            dispatch(getLatOrigin(latitude));
        },
        getLatDestination: (latitude) => {
            dispatch(getLatDestination(latitude));
        },
        getLngDestination: (longitude) => {
            dispatch(getLngDestination(longitude));
        },
        getAddressDestination: (address) => {
            dispatch(getAddressDestination(address));
        },
        getBranches: (branch) => {
            dispatch(getBranches(branch));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BranchesNearYou);
