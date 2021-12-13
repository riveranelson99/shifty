import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function LandingPage() {
  return (
    // static header holding nav bar
    <Box sx={{ width: "85vw", margin: 4 }}>
      <Typography id="landingPage-heading" variant="h4" component="div" align="center" marginBottom="4" >
        Shifty is a job marketplace used to fill in last minute bartending positions for events teams, pop ups or restaurants.
      </Typography>
      <Typography id="landingPage-body" variant="body1" component="div" align="center" lineHeight="2" >
      <br />
      Are you a bartender looking for a job?  You've come to the right place.
      <br />
      Are you an employer looking for a bartender?  Take a look at the talent and take your pick.
      </Typography>

    </Box>
    // <div>
    //   <h2>Shifty is a job marketplace used to fill in last minute bartending positions for events teams, pop ups or restaurants.</h2>
    //   <p>Are you a bartender looking for a job?  You've come to the right place.</p>
    //   <p>Are you an employer looking for a bartender?  Take a look at the talent and take your pick</p>
    // </div>
    // </Box>
    // static footer
  );
}