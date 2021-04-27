import React from "react";
import {Link, BrowserRouter} from "react-router-dom";
import {Typography} from '@material-ui/core';
import useStyles from './styles';




const Movie = ({name,genres, movieGenre, category,config,id,title, voteaverage, type,poster}) => {
    const classes = useStyles();
    
    const handleGenre = (genre) =>{
        if(genre){
            for(var i= 0; i<genre.length; i=i+1){
                for(var j= 0; j<genres.length; j=j+1){
                    if(genre[i] === genres[j].id){
                        genre[i] = genres[j].name;
                    }
                }
            }
            return <Typography variant="body2" className={classes.swiperSlideGenre}>{genre[0]} | {voteaverage} Rating</Typography>
        }
    }
    return(
        <div className={classes.swiperContainer}>
        
        <div className={classes.swiperWraper}>
            <BrowserRouter>
            <Link className={classes.link} to={`/details/${type}/${id}`}>
            <div className={classes.imageContainer}>
            <img className={classes.swiperSlideImage} src={`${config.images.secure_base_url}/${config.images.backdrop_sizes[2]}/${poster}`} alt={title} />
            </div>
            <Typography variant="h2" className={classes.swiperSlideCategory}>{category}</Typography>
            <Typography variant="h3" className={classes.swiperSlideTitle}>{title || name}</Typography>
            {handleGenre(movieGenre)}
            </Link>
            </BrowserRouter>
        </div>
        </div>
    );

};

export default Movie;
