import React, { Component } from 'react'
import { Button } from 'antd';
import { connect } from 'react-redux';
import dispatcher from '../../redux/dispatcher/dispatcher';
import state from '../../redux/state/state';

class GetDirection extends Component {

    handleGetDirection = () => {
        this.props.toggleTransit();
    }

    render() {
        return (
        <div className="get-direction">
            <Button onClick={this.handleGetDirection}>GET DIRECTION</Button>
        </div>
        )
    }
}

export default connect(state, dispatcher)(GetDirection);