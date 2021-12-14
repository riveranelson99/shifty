import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const JobList = ({ jobs }) => {
  if (!jobs.length) {
    return <h3>No Jobs Yet</h3>
  }
  console.log(jobs)

  return (
    <div>
      {Auth.loggedIn() ? (
        <div className="flex-row justify-space-between my-4">
          {jobs &&
            jobs.map((job) => (
              <div key={job._id} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light">
                    {job.jobTitle}
                  </h4>
                  <Box component="span" sx={{ display: "block" }}>
                    {job.description}
                  </Box>
                  <Box component="span" sx={{ display: "block" }}>
                    Rate: {job.rate}
                  </Box>
                  <Box component="span" sx={{ display: "block" }}>
                    Start Date: {job.startDate}
                  </Box>
                  <Box component="span" sx={{ display: "block" }}>
                    End Date: {job.endDate}
                  </Box>
                  <br />
                  <br />
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p>
          You need to be logged in to see jobs available on Shifty! {' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default JobList;