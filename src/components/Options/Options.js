import React from 'react';

const Options = ({ option, handleCorrectAnswer }) => {
  return (
    <div onClick={handleCorrectAnswer} className='flex items-center'>
      <input className='mr-1' type="radio" id={option} name="fav_language" value={option} />
      <label htmlFor={option}>{option}</label>
    </div>
  );
};

export default Options;