import React from 'react';
import parse from 'html-react-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ loadedQuestion }) => {
  const { correctAnswer, question, options } = loadedQuestion;

  const handleCorrectAnswer = (event) => {
    if (event.target.textContent.trim() === correctAnswer) {
      toast.success('Right Answer');
    }
    else {
      toast.warn('Wrong Answer');
    }
  };

  const handleShowAnswer = () => {
    toast(correctAnswer);
  }


  return (
    <div>
      <button onClick={handleShowAnswer}>Show Right Answer</button>
      {parse(question)}
      {options.map((option, index) => <div onClick={handleCorrectAnswer} key={index}> {option} </div>)}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Question;