import React from "react";
import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import { AppBar, Button, Toolbar, IconButton, Typography, Box } from "@mui/material";
import './Header.css'
// import MenuIcon from '@mui/icons-material/Menu';

import Auth from '../../utils/auth';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: '20vh',
  },
}));

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <AppBar id="banner" position="sticky" >
          <StyledToolbar>
            <Typography id="title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className="landing-button btn" to="/">
                Shifty
              </Link>
            </Typography>
            <Link className="jobs-button btn" to="/jobs">
              <Button color="primary" variant="contained">
                Jobs
              </Button>
            </Link>
          <Link className="talent-button btn" to="/talent">
          <Button color="primary" variant="contained">
            Talent
          </Button>
          </Link>
          <Link className="breakRoom-button btn" to="/breakRoom">
          <Button color="primary" variant="contained">
            Break Room
          </Button>
          </Link>
          {Auth.loggedIn() ? (
            <Button  color="primary" variant="contained" onClick={logout}>
              Logout
            </Button>
          ) : (
          <Link className="login-button btn" to="/login">
            <Button color="primary" variant="contained">
              Login / Signup
            </Button>
          </Link>
          )}
        </StyledToolbar>
      </AppBar>
    </header>
  )
}

export default Header;