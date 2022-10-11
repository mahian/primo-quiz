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
                        <div key={id} className='bg-pink-100 flex flex-col items-center rounded-lg overflow-hidden'>
                            <div className='p-10'>
                            <img className='w-full' src={logo} alt="" />
                            </div>
                            <div className='flex justify-between items-center w-full p-5 prime-bg text-white'>
                                <h4 className='font-bold'>{name}</h4>
                                <span className='font-semibold'>total : {total}</span>
                                <Link className='second-btn px-4 py-1 rounded-lg' to={`../quizes/${id}`}>Go to quiz</Link>
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