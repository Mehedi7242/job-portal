import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const applications = useLoaderData() || []; // ✅ Ensures it's always an array
    const handleStatusUpdate = (e,id)=>{
        console.log(e.target.value,id)
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
                    </tr>
                  </thead>
            
                  <tbody>
                    {/* row 1 */}
                    {applications.map((application,index)=>(
                        <tr>
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

                            <option disabled selected>Change Status</option>
                            <option>Set Interview</option>
                            <option>Under Review</option>
                            <option>Hired</option>
                            <option>Rejected</option>
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
