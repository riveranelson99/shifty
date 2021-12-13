import React from 'react';

const TalentList = ({ users }) => {
    if (!users.length) {
        return <h3>No Talent Yet</h3>
    }
    console.log(users)

    return (
        <div>
            <div className="flex-row justify-space-between my-4">
                {users &&
                    users.map((user) => (
                        <div key={user._id} className="col-12 col-xl-6">
                            <div className="card mb-3">
                                <h4 className="card-header bg-dark text-light p-2 m-0">
                                    {user.username} <br />
                                    <span className="text-white" style={{ fontSize: '1rem' }}>
                                        Contact:
                                        {user.email}
                                    </span>
                                    <span className="text-white" style={{ fontSize: '1rem' }}>
                                        Bio:
                                        {user.bio}
                                    </span>
                                    <span className="text-white" style={{ fontSize: '1rem' }}>
                                        Contact:
                                        {user.workplaces}
                                    </span>
                                    <span className="text-white" style={{ fontSize: '1rem' }}>
                                        Contact:
                                        {user.rate}/hr
                                    </span>
                                </h4>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TalentList;