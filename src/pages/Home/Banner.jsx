import React from 'react';
import { easeInOut, motion } from "motion/react"
import image1 from "../../assets/team/team_1.jpg"
import image2 from "../../assets/team/team_2.png"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex flex-1 flex-col sm:flex-row md:flex-col'>
                    <img
                    src={image1}
                    className="max-w-sm rounded-lg shadow-2xl" />
                    <img
                    src={image2}
                    className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                
                <div className='flex-1'>
                <motion.h1 
                    animate={{ rotate: -360, x:50 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ease:easeInOut}}
                 className="text-5xl font-bold">Latest Jobs For You</motion.h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;