import React from "react";
import { AppBar, Button, Toolbar, IconButton, Typography } from "@mui/material";
import banner from '../../images/hospitality.jpg'
// import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const styles = {
    backgroundImage: 'url('+ banner+')',
    height: 100
  };

  return (
    <header id="banner">
      <AppBar style={styles}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shifty
          </Typography>
          <Button color="inherit">
            Jobs
          </Button>
          <Button color="inherit">
            Break Room
          </Button>
          <Button color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header;