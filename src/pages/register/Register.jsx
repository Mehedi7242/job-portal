import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import regsiterLottieData from '../../assets/lottie/register.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import GoogleBtn from '../shared/googleBtn.Jsx';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegiter = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.email.value;
        console.log(email,password)
        createUser(email,password)
            .then(result=>{
                console.log(result.user)
                navigate('/')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
                console.log(errorCode,errorMessage)
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=" mx-auto lg:text-left w-96">
                    <Lottie animationData={regsiterLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegiter} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className='mx-auto p-2'>
                    <GoogleBtn pageInfo = {{ButtonDetails:'register with Google'}} ></GoogleBtn>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
