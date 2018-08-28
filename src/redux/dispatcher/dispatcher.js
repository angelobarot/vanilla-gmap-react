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
} from '../actions/creators';

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

export default mapDispatchToProps;