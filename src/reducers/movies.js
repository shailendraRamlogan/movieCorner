export default (movies = [], action) => {
    switch(action.type){
        case 'FETCHPOPULARMOVIE':
            return [...movies, action.payload];
        case 'FETCHNOWPLAYINGMOVIE':
            return [...movies, action.payload];
        case 'FETCHUPCOMINGMOVIE':
            return [...movies, action.payload];
        case 'FETCHTOPRATEDMOVIE':
            return [...movies, action.payload];
        case 'FETCHLATESTMOVIE':
            return [...movies, action.payload];
        case 'FETCHTHISMOVIE':
            return [...movies, action.payload];
        case 'FETCHSEARCHMOVIE':
            return [...movies, action.payload];
        case 'FETCHMOVIECREDITS':
            return [...movies, action.payload];
        default:
            return movies;
    }
}