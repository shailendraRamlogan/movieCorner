import React from "react";
import {Link, BrowserRouter} from "react-router-dom";
import {Typography} from '@material-ui/core';
import useStyles from './styles';




const HomepageContainer = ({name, genres, movieGenre, category,config,id,title, voteaverage, type,poster}) => {
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
            return <Typography variant="body2" className={classes.swiperSlideGenre}>{genre[0]}</Typography>
        }
    }
    return(
        <div className={classes.swiperContainer}>
        
        <div className={classes.swiperWraper}>
        <div key={id} className={classes.swiperSlide}>
                <BrowserRouter>
                <Link className={classes.linkClass} to={`/details/${type}/${id}`} >
                  <img className={classes.swiperSlideImage} src={`${config.images.secure_base_url}/${config.images.backdrop_sizes[2]}/${poster}`} alt={title} />
                  <h3 className={classes.swiperSlideTitle}>{title || name}</h3>
                  {handleGenre(movieGenre)}
                  <p className={classes.swiperSlideRating}>
                    <svg className={classes.swiperSlideRatingIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
                    {voteaverage}
                  </p>
                </Link>
                </BrowserRouter>
              </div>
        </div>
        </div>
    );

};

export default HomepageContainer;
