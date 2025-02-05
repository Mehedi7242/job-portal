import { h1 } from 'motion/react-client';
import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3000/jobs`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)}
        )

    },[])
    return (
        <div className=' w-11/12 mx-auto gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {
                jobs.map(job=><HotJobsCard key={job._id} job={job} ></HotJobsCard>)
            }
            
        </div>
    );
};

export default HotJobs;