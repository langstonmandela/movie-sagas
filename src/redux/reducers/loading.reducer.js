const initialState = {
    isLoading: false,
};

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING_STATE':
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

export default loadingReducer;
