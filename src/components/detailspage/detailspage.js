import React,{useEffect, useState} from "react";
import {useDispatch} from 'react-redux';

import {Container, Typography, Button, Slide} from '@material-ui/core';
import useStyles from './styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import {getConfig, getMovieGenre, getTvGenre} from '../../actions/general';
import {getThisMovie, getMovieCredits} from '../../actions/movies';
import {getThisTv} from '../../actions/tvshows';
const Detailspage = () =>{
    const dispatch = useDispatch();
    const classes = useStyles();

    const [config, setConfig] = useState([]);
    const [credits, setCredits] = useState([]);
    const [item, setItem] = useState([]);
    const movieID = sessionStorage.getItem("movies");
    const type = "movies"
    if(movieID == null){
        type = "tvshows"
        movieID = sessionStorage.getItem("tvshows");
    }


    useEffect(() => {
        firstLoad();
        
      },[movieID]);

    
    const firstLoad = async () =>{
        if(type == "movies"){
        dispatch(getThisMovie(movieID))
            .then((payload) =>{
                setItem(payload);
                console.log(payload);
            })
        }
        if(type == "tvshows"){
            dispatch(getThisTv(movieID))
                .then((payload) =>{
                    setItem(payload);
                    console.log(payload);
                })
        }
        dispatch(getConfig())
            .then((payload) =>{
                console.log(payload);
                setConfig(payload);
        })
        dispatch(getMovieCredits(movieID))
            .then((payload) =>{
                console.log(payload);
                setCredits(payload);
                
        })


    }
    const imageUrl =`${config.images.secure_base_url}/${config.images.backdrop_sizes[1]}/${item.poster_path}`;
    return(
        <div>
        <div className={classes.imageContainer}>
        <img className={classes.detailImage} src={imageUrl} />
            <Typography className={classes.movieTitle} variant="h4">{item.title}</Typography>
            <Typography className={classes.rating} variant="body2">{item.vote_average}</Typography>
            <Typography className={classes.status} variant="h6">{item.status} | {item.original_language}</Typography>
            <Typography className={classes.genres} variant="h6">{item.genres[0]} | {item.genres[1]}</Typography>
        </div>

        <div className={classes.synopsisContainer}>
            <Typography variant="h5" className={classes.synopsisHeader}>Synopsis: </Typography>
            <Typography variant="body1" className={classes.synopsisBody}>{item.overview}</Typography>
        </div>
        <div className={classes.castContainer}>
            <Typography variant="h5" className={classes.synopsisHeader}>Cast: </Typography>
        </div>
        </div>

    );

}

export default Detailspage;