import React from 'react';

const JobList = ({ jobs }) => {
    if (!jobs.length) {
        return <h3>No Jobs Yet</h3>
    }
    console.log(jobs)

    return (
        <div>
          {/* <h3 className="text-primary">{job.jobTitle}</h3> */}
          <div className="flex-row justify-space-between my-4">
            {jobs &&
              jobs.map((job) => (
                <div key={job._id} className="col-12 col-xl-6">
                  <div className="card mb-3">
                    <h4 className="card-header bg-dark text-light p-2 m-0">
                      {job.jobTitle} <br />
                      <span className="text-white" style={{ fontSize: '1rem' }}>
                        Description:
                        {job.description}
                      </span>
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
    );
};

export default JobList;