export default (tvshows = [], action) => {
    switch(action.type){
        case 'FETCHAIRINGTODAYTV':
            return [...tvshows, action.payload];
        case 'FETCHPOPULARTV':
            return [...tvshows, action.payload];
        case 'FETCHTOPRATEDTV':
            return [...tvshows, action.payload];
        case 'FETCHONAIRTV':
            return [...tvshows, action.payload];
        case 'FETCHTHISTV':
            return [...tvshows, action.payload];
        default:
            return tvshows;
    }
}