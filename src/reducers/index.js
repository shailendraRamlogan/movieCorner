import {combineReducers} from 'redux';
import movies from './movies.js';
import tvshows from './tvshows.js';
import general from './general.js';

export default combineReducers({ movies, tvshows, general });