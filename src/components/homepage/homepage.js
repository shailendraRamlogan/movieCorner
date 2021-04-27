import React,{useEffect, useState} from "react";
import {useDispatch} from 'react-redux';

import {Container, Typography, Button, Slide} from '@material-ui/core';
import useStyles from './styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import HomepageContainer from './homepageContainer/homepageContainer';
import Movie from './homeHeader/movie';
import {getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getUpcomingMovies, getLatestMovies} from '../../actions/movies';
import {getPopularTV, getTopRatedTV, getAiringTodayTV, getOnAirTV} from '../../actions/tvshows';
import {getConfig, getMovieGenre, getTvGenre} from '../../actions/general';

const Homepage = () => {
    const dispatch = useDispatch();
    const classes = useStyles();


    const [popularItems, setPopularItems] = useState([]);
    const [latestItems, setLatestItems] = useState([]);
    const [upcomingItems, setUpcomingItems] = useState([]);
    const [topRatedItems, setTopRatedItems] = useState([]);
    const [nowPlayingItems, setNowPlayingItems] = useState([]);
    const [config, setConfig] = useState([]);
    const [genres, setGenres] = useState([]); 
    const [type, setType] = useState("movies");


    useEffect(() => {
        firstLoad();
        
    },[type]);
    
    const firstLoad = async () =>{
        dispatch(getConfig())
          .then((payload) => {
            //console.log(payload);
            setConfig(payload);
          })
          .catch((err) => {
            console.log(err);
          });
        
        if(type === "movies"){
        dispatch(getPopularMovies())
          .then((payload) =>{
            //console.log("popular movies loaded");
            //console.log(payload.results);
            setPopularItems(payload.results);
          });
        
        dispatch(getTopRatedMovies())
          .then((payload) =>{
            //console.log("toprated movies loaded");
            //console.log(payload.results);
            setTopRatedItems(payload.results);
          });
    
        dispatch(getUpcomingMovies())
          .then((payload) =>{
            //console.log("upcoming movies loaded");
            //console.log(payload.results);
            setUpcomingItems(payload.results);
          });
    
        dispatch(getNowPlayingMovies())
          .then((payload) =>{
            //console.log("now paying movies loaded");
            //console.log(payload.results);
            setNowPlayingItems(payload.results);
          });
    
        dispatch(getMovieGenre())
          .then((payload) =>{
            //console.log(payload);
            setGenres(payload.genres);
          });
        }
        else if(type === "tvshows"){
          dispatch(getPopularTV())
            .then((payload) =>{
              //console.log(payload.results);
              setPopularItems(payload.results);
            });
          
          dispatch(getTopRatedTV())
            .then((payload) =>{
              //console.log(payload.results);
              setTopRatedItems(payload.results);
          });
          
          dispatch(getOnAirTV())
            .then((payload) =>{
              //console.log(payload.results);
              setNowPlayingItems(payload.results);
          });
    
          dispatch(getAiringTodayTV())
            .then((payload) =>{
              //console.log(payload.results);
              setUpcomingItems(payload.results);
          });
    
          dispatch(getTvGenre())
            .then((payload) =>{
              //console.log(payload);
              setGenres(payload.genres);
          });
            
        }  
    }



    const changeMovies = (e) =>{
        e.preventDefault();
        setType("movies");
        //document.location.reload();
    
    }
      
    const changeTv = (e) =>{
        e.preventDefault();
        setType("tvshows");
        //document.location.reload();
    }
    
    const categoryCarouselSettings = {
        slidesToShow: 9,
    
    }
    
    return(
    <div className={classes.main}>
    <div className={classes.carouselContainer}>
    <AliceCarousel
      autoPlay = {true}
      autoPlayInterval = {5000}
      disableButtonsControls
      infinite
      disableDotsControls
      animationType = {Slide} 
      mouseTracking 
      autoPlayStrategy = {"none"}
      items={topRatedItems.map(movie =>(
            <Movie
            config = {config}
            genres = {genres}
            key={movie.id}
            id = {movie.id}
            category= {"Top Rated"}
            movieGenre = {movie.genre_ids}
            voteaverage={movie.vote_average}
            poster= {movie.poster_path}
            title={movie.title}
            name={movie.name}
            type={type}
            />
          ))}
          />
          
      </div>

      <div className = {classes.buttonContainer}>
            <Button className={classes.categoryButton} variant="outlined" color="secondary" onClick={changeMovies}>MOVIES</Button>
            <Button className={classes.categoryButton} variant="outlined" color="secondary" onClick={changeTv}>TV SHOWS</Button>
      </div>
      <div className={classes.homepageContainer}>
      <Typography className= {classes.categoryName1}>POPULAR:</Typography>
      <div className= {classes.container}>
      <Slider {...categoryCarouselSettings}>
      {popularItems.map(movie =>(
            <HomepageContainer
            config = {config}
            genres = {genres}
            key={movie.id}
            id = {movie.id}
            movieGenre = {movie.genre_ids}
            voteaverage={movie.vote_average}
            poster= {movie.poster_path}
            title={movie.title}
            name = {movie.name}
            type={type}
            />
          ))}
      </Slider>

        
        </div>
      <Typography className= {classes.categoryName1}>UPCOMING:</Typography>
      <div className= {classes.container}>
      <Slider {...categoryCarouselSettings}>
      {upcomingItems.map(movie =>(
            <HomepageContainer
            config = {config}
            genres = {genres}
            key={movie.id}
            id = {movie.id}
            movieGenre = {movie.genre_ids}
            voteaverage={movie.vote_average}
            poster= {movie.poster_path}
            title={movie.title}
            name = {movie.name}
            type={type}
            />
          ))}
      </Slider>

        
      </div>
      <Typography className= {classes.categoryName1}>NOW-PLAYING:</Typography>
      <div className= {classes.container}>
      <Slider {...categoryCarouselSettings}>
      {nowPlayingItems.map(movie =>(
            <HomepageContainer
            config = {config}
            genres = {genres}
            key={movie.id}
            id = {movie.id}
            movieGenre = {movie.genre_ids}
            voteaverage={movie.vote_average}
            poster= {movie.poster_path}
            title={movie.title}
            name = {movie.name}
            type={type}
            />
          ))}
      </Slider>

        
      </div>
      </div>
    </div>
  );

};

export default Homepage;