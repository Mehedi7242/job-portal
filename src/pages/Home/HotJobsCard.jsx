import React from 'react';
import { FaClock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
const HotJobsCard = ({job}) => {
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
        status,
        hr_email,
        hr_name,
        company_logo
      } = job;
    return (
        <div>
            <div className="card h-80 card-compact bg-neutral text-neutral-content ">
                <div className="card-body  text-center">
                    <div className='flex justify-between'>
                        <div className=' w-14 h-14'>
                            <img src={company_logo} alt="" />
                        </div>
                        <div>
                            <h2 className=' text-2xl font-bold text-[#ffff]'>{company}</h2>
                            <div className='flex items-center'>
                                <CiLocationOn/>
                                <p>{location}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className=' my-auto'>
                        <h2 className=' pb-4 text-start font-bold text-xl text-[#ffff]'>{title}</h2>
                        <div className='flex  justify-between pb-4'>
                            <div className='flex gap-1 items-center'>
                            <PiFinnTheHumanFill />

                                <p className=' text-start'>{jobType}</p>
                            </div>
                            
                            <div className='flex gap-1 items-center'>
                                <FaClock />
                                <p className=' text-start'>6m ago</p>
                            </div>
                        </div>
                        <p className=' text-start'>{description}</p>
                    </div>
                    <div className="card-actions mt-auto justify-center">
                        <div className="flex gap-8">
                            <Link to={`/jobs/${_id}`} className="btn btn-primary">View Details</Link>
                            <button className="btn btn-secondary">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HotJobsCard;