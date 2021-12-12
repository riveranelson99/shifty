import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Button, Toolbar, IconButton, Typography } from "@mui/material";
import './Header.css'
// import MenuIcon from '@mui/icons-material/Menu';

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
  return (
    <header>
      <AppBar id="banner">
        <StyledToolbar>
          <Typography id="title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shifty
          </Typography>
          <Button color="primary" variant="contained">
            Jobs
          </Button>
          <Button color="primary" variant="contained">
            Break Room
          </Button>
          <Button color="primary" variant="contained">
            Login
          </Button>
        </StyledToolbar>
      </AppBar>
    </header>
  )
}

export default Header;