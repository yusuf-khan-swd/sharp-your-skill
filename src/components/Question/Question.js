import React from 'react';
import parse from 'html-react-parser';

const Question = ({ loadedQuestion }) => {
  const { correctAnswer, question, options } = loadedQuestion;

  const handleCorrectAnswer = (event) => {
    console.log(event.target.textContent.trim())
    console.log(correctAnswer)
    console.log(event.target.textContent.trim() === correctAnswer)
  }
  return (
    <div>
      {parse(question)}
      {options.map((option, index) => <div onClick={handleCorrectAnswer} key={index}> {option} </div>)}
    </div>
  );
};

export default Question;