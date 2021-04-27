import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    imageContainer:{
        backgroundColor: "#15102f",
        width: "100%",
        height: "100vh",

    },
    detailImage:{
        borderRadius: "5px",
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        filter: "brightness(40%)",
    },
    synopsisContainer:{
        backgroundColor: "#15102f",
        color: "white",
        paddingTop: "5%",
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    synopsisBody:{
        paddingTop: "2.5%",
        
    },
    starRatingContainer:{
        display: "grid",
        gridTemplateColumns: "repeat(5, 15px)",
    },
    starRatingContainerItem: {
        cursor: "pointer",
        fill: "white",
        height: "15px",
        width: "15px",
        "&.active": {
            fill:'#EB4E7A',
        },
      
    },
}));