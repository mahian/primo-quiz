import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

const StartQuiz = () => {
    const quizes = useLoaderData();
    const [showAns, setShowAns] = useState(false);
    const { questions } = quizes.data;
    return (
        <section className="p-10">
            <h1 className="text-6xl font-bold mb-10 text-center">
                start quiz {quizes.data.id}
            </h1>
            <div className="">
            {questions.map((quiz) => {
                const {question, correctAnswer} = quiz;
                const quizHandler = (answer) => {
                    const selectedAns = answer;
                    const correctAns = correctAnswer;
                    if(selectedAns === correctAns){
                        alert('correct');
                    }
                    console.log(correctAns, selectedAns);
                };
                const showAnswer = ()=> {
                    if(showAns === true){
                        setShowAns(!showAns)
                    }else{
                        setShowAns(true)
                    }
                    return showAns;
                }
                return (
                    <div key={quiz.id} className="border border-gray-300 my-5 md:max-w-4xl mx-auto p-10 rounded-lg">
                        <h2 className="text-center font-semibold text-2xl mb-5">
                            {question}
                        </h2>
                        <button className="absolute h-6 w-6 text-green-700" onClick={showAnswer}>{showAns === false ? <EyeIcon />: <EyeSlashIcon />} </button>
                        <p className={`text-center mb-5 text-green-700 ${showAns === false ? 'hidden': 'block'}`}>{correctAnswer}</p>
                        <div className="flex flex-col px-10 items-center">
                            {quiz.options.map((option) => {
                                return (
                                    <button
                                        key={option}
                                        className={`border border-blue-700 bg-blue-100 rounded-md my-2 w-full md:w-[500px] p-2 font-bold transition-all hover:bg-blue-700 hover:text-white`}
                                        onClick={() => quizHandler(option)}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            </div>
        </section>
    );
};

export default StartQuiz;
