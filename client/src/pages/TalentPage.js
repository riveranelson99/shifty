import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import TalentList from '../components/TalentList';
import { QUERY_USERS } from '../utils/queries';


const Talent = () => {
    // const { userId } = use Params();

    const { loading, data } = useQuery(QUERY_USERS);

    const users = data?.users || [];
    console.log(users)
    return (
        <div>
            <h2>
                Checkout the talent! Click the email link to connect! 
            </h2>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <TalentList
                        users={users}
                        title="Here's the current list of bartending talent available..."
                    />
                )}
            </div>
        </div>
    );
};

export default Talent;