const apiKey = "6a8fb706abe7bd7419c5fdb647b07915";
export const getConfig = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`);
        const data = await res.json();
        dispatch({type: 'FETCHCONFIG', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}



export const getMovieGenre = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);
        const data = await res.json();
        dispatch({type: 'FETCHMOVIEGENRES', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getTvGenre = () => async (dispatch) =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`);
        const data = await res.json();
        dispatch({type: 'FETCHTVGENRES', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}