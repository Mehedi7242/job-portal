import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [user?.email]);

    const today = new Date(); // Get current date

    return (
        <div>
            <h2>My Applications: {jobs.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Company Name</th>
                            <th>Application Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {jobs.map((job, index) => {
                            const deadline = new Date(job.applicationDeadline); // Convert deadline to Date
                            const isExpired = deadline < today; // Check if deadline has passed

                            return (
                                <tr key={job._id}>
                                    <th>{index + 1}</th>
                                    <td>{job.title}</td>
                                    <td>{job.company}</td>
                                    <td className={isExpired ? "text-red-500 " : ""}>
                                        {job.applicationDeadline}
                                    </td>
                                    <td>
                                        <Link to={`/viewApplications/${job.job_id}`} className="btn btn-sm btn-link">
                                            View Application,{job.job_id}
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;
