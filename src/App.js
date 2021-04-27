import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import {AppBar, TextField, Button, Typography} from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import Account from '@material-ui/icons/Person';
import useStyles from './styles';


import {getSearchMovie} from './actions/movies';
import {getSearchTvshows} from './actions/tvshows';
import Homepage from './components/homepage/homepage';
import Searchpage from './components/searchpage/searchpage';
import Detailspage from './components/detailspage/detailspage';
const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();


    const [search, setSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [parameter, setParameter] = useState("");
    
    const getMovies = async () => {
    console.log(search);
    
    setIsSearching(true);
    };
    
    const getSearch = (e) => {
      e.preventDefault();
      
      setParameter(search);
      console.log(search);
      sessionStorage.setItem("search", search);
      setSearch("");
      setIsSearching(true);
      
      window.location.href="/search";
      
    };
    
    const updateSearch = (e) =>{
      setSearch(e.target.value);
    };

    const handleHomepageClick = () =>{
      window.location.href= "/"
    }
    
    return(
    <div>
        <AppBar className={classes.navBar}>
        <form onSubmit={getSearch} className={classes.searchBar}> 
          <TextField
            className={classes.searchBox} 
            name="Search"
            variant="filled"
            color="secondary"
            label="Search"
            value={search}
            onChange={updateSearch}
          />
          <Button variant="outlined" color="secondary" endIcon={<Search/>} className={classes.searchButton} type="submit" >Search</Button>
          <div className={classes.buttonGroup}>
          <Button
            onClick={handleHomepageClick}
            className={classes.navButton}
            color="secondary"
            startIcon={<Home/>}
          />
          <Button
            className={classes.navButton}
            color="secondary"
            startIcon={<Account/>}
          />
          <Button
            className={classes.navButton}
            color="secondary"
            startIcon={<Search/>}
          />
          </div>
        </form>
        </AppBar>

        <BrowserRouter>
            <Switch>
              <Route path="/search">
                <Searchpage/>
              </Route>
              <Route path="/details">
                <Detailspage/>
              </Route>
              <Route>
                <Homepage/>
              </Route>
              <Route component={Homepage}/>
            </Switch>
        </BrowserRouter>
    </div>
  );

};

export default App;
