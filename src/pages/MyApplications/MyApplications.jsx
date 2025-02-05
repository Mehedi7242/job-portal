import React from 'react';
import useAuth from '../../../hooks/useAuth';

const MyApplications = () => {
    const {user} = useAuth();

    return (
        <div>

            <h2>
                {user?.email}
            </h2>
                
        </div>
    );
};

export default MyApplications;