const mapStateToProps = state => {
    const { loading } = state.loadingReducer;
    const { branches, origin, destination, map, travelType, directions } = state.coordinatesReducer;
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
    };
};

export default mapStateToProps;