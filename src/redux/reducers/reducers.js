import { combineReducers } from 'redux';
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
} from '../actions/types';

const initialState = {
    loading: false,
    origin: {
        latitude: 0,
        longitude: 0,
        address: ''
    },
    destination: {
        latitude: 0,
        longitude: 0,
        address: '',
        details: {}
    },
    branches: [],
    map: null,
    directionToggled: true,
    transitToggled: false,
    branchInfoToggled: false,
    travelType: 'DRIVING',
    directions: null,
}

function loadingReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_LOADING:
            return { ...state, loading: true };
        case STOP_LOADING:
            return { ...state, loading: false };
        default:
            return state;
    }
}

function coordinatesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LAT_ORIGIN:
            return {
                ...state,
                origin: {
                    ...state.origin,
                    latitude: action.payload
                }
            };
        case GET_LNG_ORIGIN:
            return {
                ...state,
                origin: {
                    ...state.origin,
                    longitude: action.payload
                }
            };
        case GET_ADDRESS_ORIGIN:
            return {
                ...state,
                origin: {
                    ...state.origin,
                    address: action.payload
                }
            };
        case GET_LAT_DESTINATION:
            return {
                ...state,
                destination: {
                    ...state.destination,
                    latitude: action.payload
                }
            };
        case GET_LNG_DESTINATION:
            return {
                ...state,
                destination: {
                    ...state.destination,
                    longitude: action.payload
                }
            };
        case GET_ADDRESS_DESTINATION:
            return {
                ...state,
                destination: {
                    ...state.destination,
                    address: action.payload
                }
            };
        case GET_BRANCHES:
            return {
                ...state,
                branches: [...state.branches, action.payload]
            };
        case GET_MAP:
            return {
                ...state,
                map: action.payload
            };
        case GET_TRAVEL_TYPE:
            return {
                ...state,
                travelType: action.payload
            }
        case GET_DIRECTIONS:
            return {
                ...state,
                directions: action.payload
            }
        default:
            return state;
    }
}

function panelReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DIRECTION:
            return {
                ...state,
                directionToggled: true,
                transitToggled: false,
                branchInfoToggled: false
            }
        case TOGGLE_TRANSIT:
            return {
                ...state,
                directionToggled: false,
                transitToggled: true,
                branchInfoToggled: false
            }
        case TOGGLE_BRANCH_INFO:
            return {
                directionToggled: false,
                transitToggled: false,
                branchInfoToggled: true
            }
        default:
            return state;
    }
}

const allReducers = combineReducers({
    loadingReducer,
    coordinatesReducer,
    panelReducer
});

export default allReducers;