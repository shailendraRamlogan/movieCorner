import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    navBar:{
        height: "10%",
        display: "flex",
        width: "100%",
        backgroundColor: "#1C262B",
        justifyContent: "center",
        alignItems: "center",
        
    },  
    searchBar: {
        marginLeft: "2%",
        width: "100%",
        '@media (min-width: 1080px)' : {
            maxWidth: "1920px",
        },
    },
    buttonGroup:{
        display:"inline-block",
        marginLeft: "30%",
    },
    navButton:{
        marginRight: "20px",
        height: "100%",
    },
    searchBox:{
        width: "50%",
        backgroundColor: "white",
    },  
    searchButton:{
        height: "100%",
        borderTopLeftRadius: "0px",
        borderBottomColor: "0px",
    },
    searchHeading:{
        marginTop: "3%",
        paddingTop: "5%",
        color: "white",
        textAlign: "center",
        fontSize: "40px",
        fontWeight: "bold",
    },
    searchContainer:{
        backgroundColor: "#15102f",
    }
}));