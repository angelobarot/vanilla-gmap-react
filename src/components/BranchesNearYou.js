import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Input, Icon, Button, Menu, Dropdown } from 'antd';
import GetDirection from './common/GetDirection';
import state from '../redux/state/state';
import dispatcher from '../redux/dispatcher/dispatcher';

const menu = (
    <Menu>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
);

const ButtonGroup = Button.Group;


class BranchesNearYou extends Component {

    componentDidMount = () => {
        this.props.toggleLoading();
    };

    render() {
        return (
            <div className="branchesNearYou">
                {
                    this.props.getDirection ?
                    <div className="get-direction-buttons">
                        <div className="transportation-buttons">
                                <ButtonGroup>
                                    <Button>
                                        <img src={require('../assets/images/walking.png')} alt="walking" />
                                    </Button>
                                    <Button>
                                        <img src={require('../assets/images/car.png')} alt="walking" />
                                    </Button>
                                    <Button>
                                        <img src={require('../assets/images/bus.png')} alt="walking" />
                                    </Button>
                                </ButtonGroup>
                        </div>
                        <div className="close-btn">
                            <Button icon="close"></Button>
                        </div>
                    </div> :
                    <h2 className="bnyHeader">Branches near you</h2>
                    
                }
                <div className="origin">
                    <p>Enter address of origin (e.g. Street, City)</p>
                    <Input
                        className="originInput"
                        placeholder="Choose starting point"
                        suffix={<Icon type="environment-o" className="pin-search" style={{ color: '#EC602C', fontSize: 24 }} />}
                    />
                </div>
                <div className="destination">
                    <p>Select branch</p>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button>
                            Nearby branch by default <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
                {
                    this.props.getDirection ?
                    <div /> :
                    <div className="button-container">
                        <GetDirection />
                    </div>
                }
            </div>
        )
    }
}

export default connect(state, dispatcher)(BranchesNearYou);
