import React from 'react';
import Box from '@mui/material/Box';

const JobList = ({ jobs }) => {
  if (!jobs.length) {
    return <h3>No Jobs Yet</h3>
  }
  console.log(jobs)

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {jobs &&
          jobs.map((job) => (
            <div key={job._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {job.jobTitle}
                </h4>
                <Box component="span" sx={{ display: "block" }}>
                  {job.description}
                </Box>
                <Box component="span" sx={{ display: "block" }}>
                  Rate: {job.rate}
                </Box>
                <Box component="span" sx={{ display: "block" }}>
                  Posted On: {job.datePosted}
                </Box>
                <Box component="span" sx={{ display: "block" }}>
                  Start Date: {job.startDate}
                </Box>
                <Box component="span" sx={{ display: "block" }}>
                  End Date: {job.endDate}
                </Box>
                <br />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobList;