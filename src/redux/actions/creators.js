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
    GET_TRAVEL_TYPE,
    GET_DIRECTIONS,
    TOGGLE_DIRECTION,
    TOGGLE_TRANSIT,
    TOGGLE_BRANCH_INFO,
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

export function getMap(map) {
    return {
        type: GET_MAP,
        payload: map
    }
}

export function getTravelType(travelType) {
    return {
        type: GET_TRAVEL_TYPE,
        payload: travelType
    }
}

export function getDirections(directions) {
    console.log(directions);
    return {
        type: GET_DIRECTIONS,
        payload: directions
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