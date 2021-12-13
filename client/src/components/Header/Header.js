import React from "react";
import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import { AppBar, Button, Toolbar, IconButton, Typography } from "@mui/material";
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
    minHeight: 128,
  },
}));

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <AppBar id="banner" position="sticky">
        <StyledToolbar>
          {/* this is the only location referencing landing-button */}
          {/* When I linked it, it changed the color, and underlined it */}
          <Typography id="title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="landing-button" to="/">
              Shifty
            </Link>
          </Typography>
          {/* this is the only location referencing jobs-button */}
          {/* It also underlined the words in the button */}
          <Link className="jobs-button" to="/jobs">
            <Button color="primary" variant="contained">
              Jobs
            </Button>
          </Link>
          {/* this is the only location referencing breakRoom-button */}
          {/* It also underlined the words in the button */}
          <Link className="breakRoom-button" to="/breakRoom">
          <Button color="primary" variant="contained">
            Break Room
          </Button>
          </Link>
          {/* this is the only location referencing login-button */}
          {/* It also underlined the words in the button */}
          <Link className="login-button" to="/login">
            <Button color="primary" variant="contained">
              Login / Signup
            </Button>
          </Link>
        </StyledToolbar>
      </AppBar>
    </header>
  )
}

export default Header;