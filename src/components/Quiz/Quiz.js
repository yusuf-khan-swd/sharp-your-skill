import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { questions, logo, name } = quiz;
  return (
    <div>
      <img
        className="w-24 mx-auto mt-3 mb-3 rounded-lg border bg-slate-500"
        src={logo}
        alt=""
      />
      <h2 className='text-center text-5xl font-semibold'>{name} Quiz</h2>
      <div className='max-w-lg grid gap-5 mx-auto mt-8 mb-28'>
        {questions.map(question => <Question key={question.id} loadedQuestion={question}></Question>)}
      </div>
    </div>
  );
};

export default Quiz;