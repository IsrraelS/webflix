const movieReducer = (movie = {}, action) => {
    switch (action.type) {
        case 'SET_MOVIE':    
        console.log("movie reducer", action.movie);
            return action.movie;
        default:
            return movie;
    }
}

export default movieReducer