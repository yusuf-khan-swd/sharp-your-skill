import React from 'react';

const Options = ({ option, handleCorrectAnswer, question }) => {
  return (
    <div onClick={handleCorrectAnswer} className='flex items-center'>
      <input className='mr-1' type="radio" id={option} name={question} value={option} />
      <label htmlFor={option}>{option}</label>
    </div>
  );
};

export default Options;