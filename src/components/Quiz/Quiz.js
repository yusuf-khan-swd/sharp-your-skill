import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { questions } = quiz;
  return (
    <div>
      <h2>This is Quiz</h2>
      {questions.map(question => <Question key={question.id} question={question}></Question>)}
    </div>
  );
};

export default Quiz;