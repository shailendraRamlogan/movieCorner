const apiKey = "6a8fb706abe7bd7419c5fdb647b07915";
export const getAiringTodayTV = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`);
        const data = await res.json();
        dispatch({type: 'FETCHAIRINGTODAYTV', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getPopularTV = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`);
        const data = await res.json();
        dispatch({type: 'FETCHPOPULARTV', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getTopRatedTV = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`);
        const data = await res.json();
        dispatch({type: 'FETCHTOPRATEDTV', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getOnAirTV = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`);
        const data = await res.json();
        dispatch({type: 'FETCHONAIRTV', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getSearchTvshows = (name) => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${name}`);
        const data = await res.json();
        dispatch({type: 'FETCHSEARCHMOVIE', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getThisTv = (id) => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
        const data = await res.json();
        dispatch({type: 'FETCHTHISTV', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}
