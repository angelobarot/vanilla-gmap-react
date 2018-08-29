import React, { Component } from 'react';
import { connect } from 'react-redux';
import state from '../redux/state/state';
import dispatcher from '../redux/dispatcher/dispatcher';
import GetDirection from './common/GetDirection';

class BranchDetails extends Component {
    render() {
        return (
        <div className="branch-details">
            <h3 className="branch-name">{this.props.destination.address}</h3>
            <p className="branch-address">{this.props.destination.address}</p>
            <p className="branch-weekday">{this.props.destination.address}</p>
            <p className="branch-weekend">{this.props.destination.address}</p>
            <p className="branch-contact">{this.props.destination.address}</p>
            <div className="button-container">
                <GetDirection />
            </div>
        </div>
        )
    }
}

export default connect(state, dispatcher)(BranchDetails);
