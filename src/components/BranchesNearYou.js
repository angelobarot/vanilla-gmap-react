import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Input } from 'antd';
import style from '../assets/scss/main.scss';
import state from '../redux/state/state';
import dispatcher from '../redux/dispatcher/dispatcher';

class BranchesNearYou extends Component {

    componentDidMount = () => {
        this.props.toggleLoading();
    };

    render() {
        return (
            <div className="branchesNearYou">
                <h2 className="bnyHeader">Branches Near You</h2>
                <div className="origin">
                    <p>Enter address of origin (e.g. Street, City)</p>
                    <Input className="originInput" placeholder="Choose starting point" />
                </div>
                <div className="destination">
                    <p>Select branch</p>
                </div>
            </div>
        )
    }
}

export default connect(state, dispatcher)(BranchesNearYou);
