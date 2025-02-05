import React, { useContext } from 'react';
import { data, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2'
const JobApply = () => {
    const {id} = useParams();
    const {user} = useAuth();
    // console.log(id,user?.email)
    const handleFormData = (e) => {
        
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const coverLetter = form.coverLetter.value;
        const resume = form.resumeUrl.value;
        console.log(resume)

        const jobApplication = {
            job_id:id,
            applicant_email:user?.email,
            fullName,
            email,
            phoneNumber,
            resume,
            coverLetter,
        }
        fetch("http://localhost:3000/job-application",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        Swal.fire({
            title: "Good job!",
            text: "Application submitted successfully!",
            icon: "success"
          });
        console.log(jobApplication)
    };
    return (
        <div className="p-6 bg-base-200 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-neutral text-neutral-content rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Apply for Job</h2>
                <form onSubmit={handleFormData}>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-neutral-content">Full Name</span>
                        </label>
                        <input type="text" name="fullName" placeholder="Enter your full name" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-neutral-content">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-neutral-content">Phone Number</span>
                        </label>
                        <input type="text" name="phoneNumber" placeholder="Enter your phone number" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-neutral-content">Cover Letter</span>
                        </label>
                        <textarea name="coverLetter" placeholder="Write a brief cover letter" className="textarea textarea-bordered w-full" rows="4" required></textarea>
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-neutral-content">Resume or Portfolio URL</span>
                        </label>
                        <input type="text" name="resumeUrl" placeholder="Enter the link to your resume or portfolio" className="input input-bordered w-full" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-full mt-4">Submit Application</button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;
