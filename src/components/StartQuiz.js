import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const StartQuiz = () => {
    const quizes = useLoaderData();
    const { questions } = quizes.data;
    const [ans, setAns] = useState();
    return (
        <section className="p-10">
            <h1 className="text-6xl font-bold mb-10 text-center">
                start quiz {quizes.data.id}
            </h1>
            <p className="text-red-500">{ans}</p>
            {questions.map((quiz) => {
                const {question, correctAnswer} = quiz;
                const quizHandler = (answer) => {
                    setAns(answer)
                    const selectedAns = answer;
                    const correctAns = correctAnswer;
                    if(selectedAns === correctAns){
                        alert('correct');
                    }
                    console.log(correctAns, selectedAns);
                };
                return (
                    <div key={quiz.id}>
                        <h2 className="text-center font-semibold text-2xl mb-3 mt-10">
                            {question}
                        </h2>
                        <p className="text-center">{correctAnswer}</p>
                        <div className="flex flex-col px-10 items-center">
                            {quiz.options.map((option) => {
                                return (
                                    <button
                                        key={option}
                                        className={`border border-sky-500 my-2 md:w-1/2 p-2 font-bold transition-all hover:bg-slate-200`}
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
        </section>
    );
};

export default StartQuiz;
