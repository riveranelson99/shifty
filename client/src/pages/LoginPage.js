import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
// import { SignUp } from '../pages/SignUpPage';

import Auth from '../utils/auth';

//styling
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Linkto from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();


export default function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">

                    {/* <CssBaseline /> */}
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        {data ? (
                            <p> Success!!!!!! You may now head {' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                        ) : (
                            <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Login
                                </Button>
                                <Grid container>
                                    <Grid item>
                                    <Link to="/signup">Don't have an account? Sign Up</Link>
                                </Grid>
                            </Grid>
                            </Box>
                        )}
                    {error && (
                        <div>
                            {error.message}
                        </div>
                    )}
                </Box>

            </Container>
        </ThemeProvider>
        </div >
    );
}