import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='py-10'>
            <div className='flex flex-col items-center text-center p-10'>
                <h1 className='text-6xl font-semibold'>Quize Website Title</h1>
                <p className='text-gray-600 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur beatae tempore quod animi illo, <br /> corporis quia ex, dolor quos amet nemo, velit voluptates!</p>
                <div className='mt-4'>
                    <Link to='blog'><button className='btn prime-btn mr-5'>Learn More</button></Link>
                    <Link to='quizes'><button className='btn second-btn'>Get Quize</button></Link>
                </div>
            </div>
            <div className='p-10 flex justify-center items-center'>
                <img className='rounded-xl md:max-w-4xl' src="assets/learning.jpg" alt="" />
            </div>
        </section>
    );
};

export default Hero;