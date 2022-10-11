import { ArrowRightIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='py-10'>
            <div className='flex flex-col items-center text-center p-10'>
                <h1 className='text-6xl font-bold'>Improve your knowledge</h1>
                <p className='text-gray-600 mt-5'>Read our blogs to learn new things and participate in quizzes with us to <br /> improve your knowledge.</p>
                <div className='mt-5 flex'>
                    <Link to='blog'><button className='btn prime-btn mr-5 flex items-center md:px-8'>Learn More <BookOpenIcon className="w-6 h-6 ml-3"/></button></Link>
                    <Link to='quizes'><button className='btn second-btn flex items-center md:px-8'>Get Quize <ArrowRightIcon className="w-6 h-6 ml-3"/></button></Link>
                </div>
            </div>
            <div className='p-10 flex justify-center items-center'>
                <img className='rounded-xl md:max-w-4xl' src="assets/learning.jpg" alt="" />
            </div>
        </section>
    );
};

export default Hero;