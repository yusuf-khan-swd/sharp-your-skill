import React from 'react';
import parse from 'html-react-parser';

const Question = ({ loadedQuestion }) => {
  const { correctAnswer, question, options } = loadedQuestion;
  return (
    <div>
      {parse(question)}
    </div>
  );
};

export default Question;