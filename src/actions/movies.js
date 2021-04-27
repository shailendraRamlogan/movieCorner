const apiKey = "6a8fb706abe7bd7419c5fdb647b07915";
export const getPopularMovies = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        const data = await res.json();
        dispatch({type: 'FETCHPOPULARMOVIE', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getTopRatedMovies = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
        const data = await res.json();
        dispatch({type: 'FETCHTOPRATEDMOVIE', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getNowPlayingMovies = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
        const data = await res.json();
        dispatch({type: 'FETCHNOWPLAYINGMOVIE', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getUpcomingMovies = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
        const data = await res.json();
        dispatch({type: 'FETCHUPCOMINGMOVIE', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getLatestMovies = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`);
        const data = await res.json();
        dispatch({type: 'FETCHLATESTMOVIE', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getThisMovie = (id) => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
        const data = await res.json();
        dispatch({type: 'FETCHTHISMOVIE', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getSearchMovie = (name) => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}`);
        const data = await res.json();
        dispatch({type: 'FETCHSEARCHMOVIE', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getMovieCredits = (id) => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`);
        const data = await res.json();
        dispatch({type: 'FETCHTHISMOVIE', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}
