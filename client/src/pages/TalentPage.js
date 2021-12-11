import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import JobList from '../components/JobList';
import { QUERY_JOBS } from '../utils/queries';

const Talent = () => {
    // const { jobId } = useParams();

    const { loading, data } = useQuery(QUERY_JOBS);

    const jobs = data?.jobs || [];
    console.log(jobs)
    return (
        <div>
            <h2>
                Available Jobs!
            </h2>
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

export default Talent;