import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import JobList from '../components/JobList';
import JobForm from '../components/JobForm';
import { QUERY_JOBS } from '../utils/queries';

const Job = () => {
  const { loading, data } = useQuery(QUERY_JOBS);

  const jobs = data?.jobs || [];
  console.log(jobs)
  return (
    <div>
      <h2>
        Available Jobs!
      </h2>
      <h4>
      Have a job you need filled?
      <br/>
      Post your job and find the talent you need!
      </h4>
      <JobForm />
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <JobList
            jobs={jobs}
            title="Here's the current list of jobs available..."
          />
        )}
      </div>
    </div>
  );
};

export default Job;