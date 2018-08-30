import React, { Component } from 'react';
import { connect } from 'react-redux';
import state from '../redux/state/state';
import dispatcher from '../redux/dispatcher/dispatcher';
import GetDirection from './common/GetDirection';

class BranchDetails extends Component {
    render() {
        return (
        <div className="branch-details">
            <h3 className="branch-name">{this.props.branchDetails.name}</h3>
            <p className="branch-address">{this.props.branchDetails.vicinity}</p>
            {
                this.props.branchDetails.openNow ?
                        <p className="branch-weekday">Open Now</p>
                        :
                        <p className="branch-weekend">Closed Now</p>
            }
            <p className="branch-contact">{this.props.branchDetails.contactNumber}</p>
            <div className="button-container">
                <GetDirection />
            </div>
        </div>
        )
    }
}

export default connect(state, dispatcher)(BranchDetails);
