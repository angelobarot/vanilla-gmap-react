import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Input } from 'antd';
import style from '../assets/scss/main.scss';
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
                    <Input className="originInput" placeholder="Choose starting point" />
            </div>
            <div className="destination">
                <p>Select branch</p>
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
