import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({


    swiperContainer: {
        fontFamily: "'Lato', sans-serif",
        marginTop: "5%",
        paddingTop: "10%",
        paddingLeft: "15%",
        height: "300px",
        width: "100%",
    },
    swiperSlide: {
        opacity: ".8",
        position: "relative",
        display: "block",
        transition: "transform .2s",
        "& hover":{
            opacity: 1,
            transform: "scale(1.05)",
            transition: "transform .2s",
        }
    },
    swiperSlideImage: {
        borderRadius: "5px",
        height: "190px",
        width: "auto",
    },
    swiperSlideTitle: {
        color: "rgba(255, 255, 255, .9)",
        fontFamily: "'Roboto', sans-serif",
        fontSize: ".9rem",
        margin: "5px 0 0",
        width: "135px",
    },
    swiperSlideGenre: {
        color: "rgba(255, 255, 255, .7)",
        fontFamily: "'Roboto', sans-serif",
        fontSize: ".8rem",
        margin: "5px 0 0",
        width: "135px",
    },
    linkClass:{
        textDecoration: "none",
    },
    swiperSlideRating: {
        backgroundColor: "rgba(0, 0, 0, .8)",
        color: "#fff",
        fontSize: ".8rem",
        margin: 0,
        padding: "3px",
        position: "absolute",
        left: 0,
        top: ".8rem",
        width: "45px",
    },
    swiperSlideRatingIcon: {
        fill: "#fff",
        height: "auto",
        margin: "0 5px -5px 0",
        width: "18px",
    },


}));