import React from 'react';
import { easeInOut, motion } from "motion/react"
import image1 from "../../assets/team/team_1.jpg"
import image2 from "../../assets/team/team_2.png"
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex flex-1 flex-col sm:flex-row md:flex-col'>
                    <motion.img 
                    animate={{x:[0,20,0]}}
                    transition={{ease:easeInOut, repeat:Infinity,duration:10}}
                    src={image1}
                    className="max-w-sm rounded-lg w-64 shadow-2xl border-blue-400 rounded-t-[40px] border-l-4 border-b-4" />
                    <motion.img
                     animate={{y:[-20,0,-20]}}
                     transition={{ease:easeInOut, repeat:Infinity,duration:10}}
                    src={image2}
                    className="max-w-sm rounded-lg w-64 shadow-2xl border-blue-400 rounded-t-[40px] border-l-4 border-b-4" />
                </div>
                
                <div className='flex-1'>
                <motion.h1 
                    animate={{x:[20,0,20]}}
                    transition={{ease:easeInOut, repeat:Infinity,duration:8}}
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