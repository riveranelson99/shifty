import React from 'react';

const JobList = ({ users }) => {
    if (!users.length) {
        return <h3>No Talent Yet</h3>
    }
    console.log(users)

    return (
        <div>
            {/* <h3 className="text-primary">{job.jobTitle}</h3> */}
            <div className="flex-row justify-space-between my-4">
                {users &&
                    users.map((user) => (
                        <div key={user._id} className="col-12 col-xl-6">
                            <div className="card mb-3">
                                <h4 className="card-header bg-dark text-light p-2 m-0">
                                    {user.username} <br />
                                    <span className="text-white" style={{ fontSize: '1rem' }}>
                                        Description:
                                        {user.bio}
                                    </span>
                                    <span className="text-white" style={{ fontSize: '1rem' }}>
                                        Contact:
                                        {user.email}
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