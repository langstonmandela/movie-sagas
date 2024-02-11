const initialGenreState = {
    genres: [],
};

const genreReducer = (state = initialGenreState, action) => {
    switch (action.type) {
        case 'SET_GENRES': // Action to set the list of genres
            return { ...state, genres: action.payload };
        default:
            return state;
    }
};

export default genreReducer;
