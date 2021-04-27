import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    main:{
        backgroundColor: "#15102f",
    },
    carouselContainer:{
        backgroundColor: "#15102f",
        width: "100%",

    },
    container:{
        height: "10%",
    },
    homepageContainer:{
        backgroundColor: "#15102f",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "2%",
    },
    categoryName1:{
        color: "white",
        fontWeight: "bold",
        marginBottom: "2%",
        fontFamily: "'Roboto', sans-serif",
    },
    buttonContainer:{
        marginTop:"2.5%",
        paddingBottom:"2.5%",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
    },
    categoryButton:{
        width: "80vh",
        height: "5vh",
        marginLeft: "6%",
        backgroundPosition: "0 0, 0 100%",
        borderLeft: "3px solid rgba(255, 86, 132, 0.4)",
        borderRight: "3px solid rgba(83, 50, 201, 0.4)",
        borderRadius: "10px",
    }
}));