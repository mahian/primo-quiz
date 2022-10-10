import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Quizes = () => {
    const [quizes, setQuizes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://openapi.programming-hero.com/api/quiz');
            const data = await response.json();
            setQuizes(data.data);
        };
        fetchData();
    }, []);
    return (
        <section className='p-10'>
            <h2 className='text-3xl font-semibold mb-10 text-center'>Your Quizes</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-5'>
            {
                quizes.map(quiz => {
                    const {name, logo, total, id} = quiz;
                    return(
                        <div key={id} className='bg-slate-200 flex flex-col items-center'>
                            <div className='p-10'>
                            <img className='w-full' src={logo} alt="" />
                            </div>
                            <div className='flex justify-between w-full p-5 prime-bg text-white'>
                                <h4 className='font-bold'>{name}</h4>
                                <span className='font-semibold'>total : {total}</span>
                                <Link to={`quizes/${id}`}>Go to quiz</Link>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    );
};

export default Quizes;