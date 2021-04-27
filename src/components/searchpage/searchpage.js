import React,{useEffect, useState} from "react";
import {useDispatch} from 'react-redux';
import {Container, Typography, Button, Slide} from '@material-ui/core';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {getConfig, getMovieGenre, getTvGenre} from '../../actions/general';
import {getSearchMovie} from '../../actions/movies';
import {getSearchTvshows} from '../../actions/tvshows';
import SearchResults from './searchResults/searchResults';
import useStyles from './styles';

const Searchpage = () => {
  const classes = useStyles();
  const query = sessionStorage.getItem("search");
  console.log(query);

  const dispatch = useDispatch();

  const [tvSearchResults, setTvSearchResults] = useState([]);
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  const [config, setConfig] = useState([]);
  const [genre, setGenre] = useState([]);
  


  useEffect(() => {
    firstLoad();
    
  },[query]);
  
  const firstLoad = async () =>{
    dispatch(getConfig())
      .then((payload) => {
        console.log(payload);
        setConfig(payload);
      })
      .catch((err) => {
        console.log(err);
      });
    
    dispatch(getMovieGenre())
      .then((payload) =>{
        console.log(payload);
        genre.push(payload.genres);
    });

    dispatch(getTvGenre())
      .then((payload) =>{
      console.log(payload);
      genre.push(payload.genres);
    });

    dispatch(getSearchMovie(query))
      .then((payload) =>{
        setMovieSearchResults(payload.results);
    });

    dispatch(getSearchTvshows(query))
      .then((payload) => {
        setTvSearchResults(payload.results);
    });
      
  }
  const categoryCarouselSettings = {
    slidesToShow: 5,
    infinite: true,

  }
  return(
    <div className={classes.main}>
      <h1 className={classes.searchHeading}>Search Results For : {query}</h1>
      <div className={classes.homepageContainer}>
      <Typography className= {classes.categoryName1}>TV-SHOWS:</Typography>
      <div className={classes.container}>
      <Slider {...categoryCarouselSettings}>
      {tvSearchResults.map(movie =>(
            <SearchResults
            config = {config}
            genres = {genre}
            key={movie.id}
            id = {movie.id}
            movieGenre = {movie.genre_ids}
            voteaverage={movie.vote_average}
            poster= {movie.poster_path}
            title={movie.title}
            name = {movie.name}
            type = "tvshows"
            />
          ))}
      </Slider>
      </div>
      <Typography className= {classes.categoryName1}>MOVIES:</Typography>
      <div className={classes.container}>
      <Slider {...categoryCarouselSettings}>
      {movieSearchResults.map(movie =>(
            <SearchResults
            config = {config}
            genres = {genre}
            key={movie.id}
            id = {movie.id}
            movieGenre = {movie.genre_ids}
            voteaverage={movie.vote_average}
            poster= {movie.poster_path}
            title={movie.title}
            name = {movie.name}
            type = "movies"
            />
          ))}
      </Slider>
      </div>
      </div>
    </div>
  );
};

export default Searchpage;
