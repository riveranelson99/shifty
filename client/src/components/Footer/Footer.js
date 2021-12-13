import { AppBar } from "@mui/material";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import './Footer.css'

function Footer() {
  return (
    <footer>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={2}>
              {/* <Box borderBottom={1}>Joe</Box> */}
              <Box>
                <Link
                  type="link"
                  target="_blank"
                  href="https://github.com/jdkowal"
                  color="dark">
                  <FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon>
                </Link>
                <span type="name">Joe</span>
              </Box>
            </Grid>

            <Grid item xs={12} sm={2}>
              {/* <Box borderBottom={1}>Kaileigh</Box> */}
              <Box>
                <Link
                  type="link"
                  target="_blank"
                  href="https://github.com/kbonaccorsi"
                  color="dark">
                  <FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon>
                </Link>
                <span type="name">Kaileigh</span>
              </Box>
            </Grid>

            <Grid item xs={12} sm={2}>
              {/* <Box borderBottom={1}>Mariana</Box> */}
              <Box>
                <Link
                  type="link"
                  target="_blank"
                  href="https://github.com/mas0530"
                  color="dark">
                  <FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon>
                </Link>
                <span type="name">Mariana</span>
              </Box>
            </Grid>

            <Grid item xs={12} sm={2}>
              {/* <Box borderBottom={1}>Nelson</Box> */}
              <Box>
                <Link
                  type="link"
                  target="_blank"
                  href="https://github.com/riveranelson99"
                  color="dark">
                  <FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon>
                </Link>
                <span type="name">Nelson</span>
              </Box>
            </Grid>

            <Grid item xs={12} sm={2}>
              {/* <Box borderBottom={1}>Stephen</Box> */}
              <Box>
                <Link
                  type="link"
                  target="_blank"
                  href="https://github.com/SThompsonChicago"
                  color="dark">
                  <FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon>
                </Link>
                <span type="name">Stephen</span>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </footer>
  )
};

export default Footer;