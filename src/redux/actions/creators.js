import {
    TOGGLE_LOADING,
    STOP_LOADING,
    GET_LAT_ORIGIN,
    GET_LNG_ORIGIN,
    GET_ADDRESS_ORIGIN,
    GET_LAT_DESTINATION,
    GET_LNG_DESTINATION,
    GET_ADDRESS_DESTINATION,
    GET_BRANCHES,
    GET_MAP,
    TOGGLE_DIRECTION,
    TOGGLE_TRANSIT,
    TOGGLE_BRANCH_INFO,
    GET_BRANCH_DETAILS
} from './types';

export function toggleLoading() {
    return {
        type: TOGGLE_LOADING
    }
}

export function stopLoading() {
    return {
        type: STOP_LOADING
    }
}

export function getLatOrigin(latitude) {
    return {
        type: GET_LAT_ORIGIN,
        payload: latitude
    }
}

export function getLngOrigin(longitude) {
    return {
        type: GET_LNG_ORIGIN,
        payload: longitude
    }
}

export function getAddressOrigin(address) {
    return {
        type: GET_ADDRESS_ORIGIN,
        payload: address
    }
}

export function getLatDestination(latitude) {
    return {
        type: GET_LAT_DESTINATION,
        payload: latitude
    }
}

export function getLngDestination(longitude) {
    return {
        type: GET_LNG_DESTINATION,
        payload: longitude
    }
}

export function getAddressDestination(address) {
    return {
        type: GET_ADDRESS_DESTINATION,
        payload: address
    }
}

export function getBranches(branch) {
    return {
        type: GET_BRANCHES,
        payload: branch
    }
}

export function getBranchDetails(details) {
    return {
        type: GET_BRANCH_DETAILS,
        payload: details
    }
}

export function getMap(map) {
    return {
        type: GET_MAP,
        payload: map
    }
}

export function toggleDirection() {
    return {
        type: TOGGLE_DIRECTION
    }
}

export function toggleTransit() {
    return {
        type: TOGGLE_TRANSIT
    }
}

export function toggleBranchInfo() {
    return {
        type: TOGGLE_BRANCH_INFO
    }
}