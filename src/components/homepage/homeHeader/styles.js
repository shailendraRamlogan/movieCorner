import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    swiperContainer:{
        fontFamily: "'Lato', sans-serif",
        height: "100%",
        width: "100%",

    },
    
    swiperSlideImage:{
        
        borderRadius: "5px",
        height: "100vh",
        width: "200vh",
        filter: "brightness(40%)",
    },    
    swiperSlideCategory:{
        position: "fixed",
        color: "rgba(255, 255, 255, .9)",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1.9rem",
        marginTop: "-12%",
        marginLeft: "5%",
        width: "500px",

    },
    link:{
        textDecoration: "none",
    },
    swiperSlideTitle:{
        position: "fixed",
        color: "rgba(255, 255, 255, .9)",
        textDecoration: "none",
        width: "90%",
        marginTop: "-8%",
        marginLeft: "5%",
        fontSize: "2rem",
        fontWeight: "bold",

    },
    swiperSlideGenre:{
        position: "fixed",
        color: "rgba(255, 255, 255, .7)",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1rem",
        marginTop: "-5%",
        marginLeft: "5%",
        width: "135px",
        paddingBottom: "22px",
    }

}));