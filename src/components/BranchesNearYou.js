import React, { Component } from 'react'
import { connect } from 'react-redux';
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
  render() {
    return (
      <div className={style.branchesNearYou}>
        <h2>Branches Near You</h2>
        <p>Enter address of origin (e.g. Street, City)</p>
        <p>Select branch</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return state;
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
