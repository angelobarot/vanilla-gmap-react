const mapStateToProps = state => {
    const { loading } = state.loadingReducer;
    const { branches, origin, destination } = state.coordinatesReducer;
    const { directionToggled, transitToggled, branchInfoToggled } = state.panelReducer;
    return {
        loading,
        branches,
        origin,
        destination,
        directionToggled,
        transitToggled,
        branchInfoToggled
    };
};

export default mapStateToProps;