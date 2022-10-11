import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StartQuiz = () => {
    const quizes = useLoaderData()
    return (
        <section className='p-10'>
            <h1 className='text-6xl font-bold my-10 text-center'>start quiz {quizes.data.id}</h1>
            {
             quizes.data.questions.map(quiz=> {
                return(
                    <div key={quiz.id}>
                        <h2 className='text-center font-semibold text-2xl mb-3 mt-10'>{quiz.question}</h2>
                        <div className='flex flex-col px-10 items-center'>
                            {quiz.options.map(option=> <button className='border border-sky-500 my-2 md:w-1/2 p-2 font-bold transition-all hover:bg-slate-200'>{option}</button>)}
                        </div>
                    </div>
                )
             })    
            }
        </section>
    );
};

export default StartQuiz;