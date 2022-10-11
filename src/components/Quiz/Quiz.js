import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { questions } = quiz;
  return (
    <div className='max-w-lg grid gap-5 mx-auto'>
      {questions.map(question => <Question key={question.id} loadedQuestion={question}></Question>)}
    </div>
  );
};

export default Quiz;