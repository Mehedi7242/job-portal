import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        hr_email,
        hr_name,
        company_logo,
    } = job;

    return (
        <div className="bg-neutral min-h-screen text-neutral-content px-6 py-10">
            <div className="max-w-4xl mx-auto shadow-xl card card-bordered bg-base-300 p-8">
                <div className="flex items-center gap-6 mb-6">
                    <img
                        src={company_logo}
                        alt={`${company} logo`}
                        className="w-24 h-24 rounded-full object-cover border border-primary"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">{company}</h1>
                        <p className="text-sm text-secondary">{location}</p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <p className="mb-4">{description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <h3 className="font-bold text-lg">Job Details</h3>
                        <ul className="list-disc list-inside">
                            <li>
                                <span className="font-semibold">Type:</span> {jobType}
                            </li>
                            <li>
                                <span className="font-semibold">Category:</span> {category}
                            </li>
                            <li>
                                <span className="font-semibold">Salary:</span> {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
                            </li>
                            <li>
                                <span className="font-semibold">Application Deadline:</span> {applicationDeadline}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Contact HR</h3>
                        <ul className="list-disc list-inside">
                            <li>
                                <span className="font-semibold">Name:</span> {hr_name}
                            </li>
                            <li>
                                <span className="font-semibold">Email:</span> <a href={`mailto:${hr_email}`} className="text-primary">{hr_email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-bold text-lg">Requirements</h3>
                    <ul className="list-disc list-inside">
                        {requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="font-bold text-lg">Responsibilities</h3>
                    <ul className="list-disc list-inside">
                        {responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                        ))}
                    </ul>
                </div>

                <div className="text-center flex justify-end gap-2">
                    <button className="btn btn-secondary">Save Job</button>
                    <Link to={`/jobsApply/${_id}`} className="btn btn-primary ">Apply Now</Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
