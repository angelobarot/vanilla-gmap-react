import React, { Component } from 'react';
import GetDirection from './common/GetDirection';

class BranchDetails extends Component {
    render() {
        return (
        <div className="branch-details">
            <h3 className="branch-name">{this.props.branchName}</h3>
            <p className="branch-address">{this.props.address}</p>
            <p className="branch-weekday">{this.props.weekday}</p>
            <p className="branch-weekend">{this.props.weekend}</p>
            <p className="branch-contact">{this.props.contactNumber}</p>
            <div className="button-container">
                <GetDirection />
            </div>
        </div>
        )
    }
}

export default BranchDetails;
