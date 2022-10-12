import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { questions, logo, name } = quiz;

  const [rightAnswer, setRightAnswer] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);

  const handleRightAnswer = (answer) => {
    if (!rightAnswer.includes(answer)) {
      const id = wrongAnswer.indexOf(answer);
      const rest = wrongAnswer.filter((ans) => wrongAnswer.indexOf(ans) !== id);
      setWrongAnswer(rest);
      const newAnswer = [...rightAnswer, answer];
      setRightAnswer(newAnswer);
    }
  };

  const handleWrongAnswer = (answer) => {
    if (!wrongAnswer.includes(answer)) {
      const id = rightAnswer.indexOf(answer);
      const rest = rightAnswer.filter((ans) => rightAnswer.indexOf(ans) !== id);
      setRightAnswer(rest);
      const newAnswer = [...wrongAnswer, answer];
      setWrongAnswer(newAnswer);
    }
  };

  return (
    <div className="relative">
      <img
        className="w-24 mx-auto mt-3 mb-3 rounded-lg border bg-slate-500"
        src={logo}
        alt=""
      />
      <h2 className="text-center text-5xl font-semibold">{name} Quiz</h2>
      <div className="text-center mt-2 sticky top-1 max-w-sm mx-auto p-2 rounded-lg bg-slate-400">
        <p>Total Right Answer: {rightAnswer.length} </p>
        <p>Total Wrong Answer: {wrongAnswer.length} </p>
      </div>
      <div className="max-w-lg grid gap-5 mx-auto mt-8 mb-28">
        {questions.map((question) => (
          <Question
            key={question.id}
            handleRightAnswer={handleRightAnswer}
            handleWrongAnswer={handleWrongAnswer}
            loadedQuestion={question}
          ></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
