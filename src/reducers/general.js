export default (general = [], action) => {
    switch(action.type){
        case 'FETCHCONFIG':
            return [...general, action.payload];
        case 'FETCHMOVIEGENRES':
            return [...general, action.payload];
        case 'FETCHTVGENRES':
            return [...general, action.payload];
        case 'FETCHCASTIMAGE':
            return [...general, action.payload];
        default:
            return general;
    }
}