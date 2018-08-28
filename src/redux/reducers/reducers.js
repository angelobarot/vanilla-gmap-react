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
    GET_BRANCHES
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
        address: ''
    },
    branches: []
}

function loadingReducer (state = initialState, action) {
    switch(action.type) {
        case TOGGLE_LOADING:
            return { ...state, loading: true };
        case STOP_LOADING:
            return { ...state, loading: false };
        default:
            return state;
    }
}

function coordinatesReducer (state = initialState, action) {
    switch(action.type) {
        case GET_LAT_ORIGIN:
            return { 
                ...state,
                origin: {
                    ...origin,
                    latitude: action.payload
                } 
            };
        case GET_LNG_ORIGIN:
            return {
                ...state,
                origin: {
                    ...origin,
                    longitude: action.payload
                }
            };
        case GET_ADDRESS_ORIGIN:
            return {
                ...state,
                origin: {
                    ...origin,
                    address: action.payload
                }
            };
        case GET_LAT_DESTINATION:
            return {
                ...state,
                destination: {
                    ...destination,
                    latitude: action.payload
                }
            };
        case GET_LNG_DESTINATION:
            return {
                ...state,
                destination: {
                    ...destination,
                    longitude: action.payload
                }
            };
        case GET_ADDRESS_DESTINATION:
            return {
                ...state,
                destination: {
                    ...destination,
                    address: action.payload
                }
            };
        case GET_BRANCHES:
            return {
                ...state,
                branches: [ ...branches, action.payload ]
            }
        default:
            return state;
    }
}

const allReducers = combineReducers({
    loadingReducer,
    coordinatesReducer
});

export default allReducers;