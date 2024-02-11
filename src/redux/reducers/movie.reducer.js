const initialState = {
    list: [],
    details: null,
    isLoading: false, 
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return { ...state, list: action.payload, isLoading: false }; 
        case 'SET_MOVIE_DETAILS':
            return { ...state, details: action.payload, isLoading: false }; // Reset loading state when details are set
        case 'SET_LOADING_STATE': // Handle loading state update
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

export default moviesReducer;
