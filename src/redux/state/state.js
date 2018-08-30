const mapStateToProps = state => {
    const { loading } = state.loadingReducer;
    const { branches, origin, destination, map, travelType, directions, branchDetails } = state.coordinatesReducer;
    const { directionToggled, transitToggled, branchInfoToggled } = state.panelReducer;
    return {
        loading,
        branches,
        origin,
        destination,
        map,
        directionToggled,
        transitToggled,
        branchInfoToggled,
        travelType,
        directions,
        branchDetails
    };
};

export default mapStateToProps;