const mapStateToProps = state => {
    const { loading } = state.loadingReducer;
    const { branches, origin, destination } = state.coordinatesReducer;
    return {
        loading,
        branches,
        origin,
        destination
    };
};

export default mapStateToProps;