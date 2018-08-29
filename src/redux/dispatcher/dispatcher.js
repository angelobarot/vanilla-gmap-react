import {
    toggleLoading,
    stopLoading,
    getLatOrigin,
    getLngOrigin,
    getAddressOrigin,
    getLatDestination,
    getLngDestination,
    getAddressDestination,
    getBranches,
    getMap,
    toggleDirection,
    toggleTransit,
    toggleBranchInfo
} from '../actions/creators';

const mapDispatchToProps = dispatch => {
    return {
        toggleLoading: () => {
            dispatch(toggleLoading());
        },
        stopLoading: () => {
            dispatch(stopLoading());
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
        getMap: (map) => {
            dispatch(getMap(map));
        },
        toggleDirection: () => {
            dispatch(toggleDirection());
        },
        toggleTransit: () => {
            dispatch(toggleTransit());
        },
        toggleBranchInfo: () => {
            dispatch(toggleBranchInfo());
        }
    }
}

export default mapDispatchToProps;