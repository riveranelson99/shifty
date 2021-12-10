import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import JobList from '../components/JobList';
//import { QUERYNAMINGCONVENTION } from '../utils/queries';

const Job = () => {
  const { jobId } = useParams();

  // const { loading, data } = useQuery(QUERYNAMINGCONVENTION, {
  //   variables: { jobId: jobId },
  // });

  const job = data?.job || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>
        Available Jobs!
      </h2>

      {job.name?.length > 0 && <JobList name={job.name} />}
    </div>
  )
}

export default Job;