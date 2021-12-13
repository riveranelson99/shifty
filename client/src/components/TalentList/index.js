import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


const TalentList = ({ users }) => {
    if (!users.length) {
        return <h3>No Talent Yet</h3>
    }
    console.log(users)

    return (
        <div>
            {Auth.loggedIn() ? (
                <div className="flex-row justify-space-between my-4">
                    {users &&
                        users.map((user) => (
                            <Box className="">
                                <div key={user._id} className="col-12 col-xl-6">
                                    <div className="card mb-3">
                                        <h3 className="card-header bg-dark text-light p-2 m-0"> {user.username} </h3>
                                        <Box component="span" sx={{ display: 'block' }}>Contact: <a href="mailto:{{user.email}}"> {user.email} </a></Box>
                                        <Box component="span" sx={{ display: 'block' }}>A little about me: {user.bio}</Box>
                                        <Box component="span" sx={{ display: 'block' }}>Past Experience: {user.workplaces}</Box>
                                        <Box component="span" sx={{ display: 'block' }}>Pay Rate: {user.rate}/hr</Box>
                                    </div>
                                </div>
                            </Box>
                        ))}
                </div>
            ) : (
                <p>
                    You need to be logged in to see the talent on Shifty! {' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

export default TalentList;