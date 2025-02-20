import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const applications = useLoaderData() || [];
    const handleStatusUpdate = (e,id)=>{
        console.log(e.target.value,id)
        const data = {
            status:e.target.value
        }
        fetch(`http://localhost:3000/job-application/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
            .then(res=>res.json())
            .then(data=>console.log(data))
    }

    return (
        <div>
            <h2>Applications for this job</h2>
           
                <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Email</th>
                      <th>Resume</th>
                      <th>coverLetter</th>
                      <th>PhoneNumber</th>
                      <th>Status</th>
                    </tr>
                  </thead>
            
                  <tbody>
                    {/* row 1 */}
                    {applications.map((application,index)=>(
                        <tr key={index}>
                        <th>{index+1}</th>
                        <td>{application.applicant_email}</td>
                        <td>{application.resume}</td>
                        <td>{application.coverLetter}</td>
                        <td>{application.phoneNumber}</td>

                        <td>
                        <select
                            onChange={(e)=>handleStatusUpdate(e,application._id)}
                            className="select select-bordered select-xs w-full max-w-xs">
                            defaultValue={application.status||"Change Status"}

                            <option disabled selected>{application.status||"Change Status"}</option>
                            <option value="Set Interview">Set Interview</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Hired">Hired</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                        </td>
                        
                      </tr>
                    ))
                    }
                    
                  </tbody>
                </table>
              </div>
            
        </div>
    );
};

export default ViewApplications;
