import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Link } from "react-router-dom"
// import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    link: {
      margin: theme.spacing(1),
    },
  }));


const Nav = () => {
    const classes = useStyles();
    let isLoggedIn = window.localStorage.getItem("username"), logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    if (isLoggedIn) {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                {/* <ul className="nav nav-tabs"> */}
                    
                        <Link
                            to="/log"
                            className={classes.link}>
                        Log Run
                        </Link>
                    
                    
                        <Link
                            to="/list"
                            className={classes.link}
                        >My Runs
                        </Link>
                    
                    {(isLoggedIn ? <button onClick={logout}>Logout</button> : null)}
                    {/* </ul> */}
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )} else { return null }
}
export default Nav;