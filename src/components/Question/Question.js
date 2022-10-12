import parse from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Options from "../Options/Options";

const Question = ({ loadedQuestion, handleRightAnswer, handleWrongAnswer }) => {
  const { correctAnswer, question, options } = loadedQuestion;

  const handleCorrectAnswer = (event) => {
    const selected = event.target.value;
    if (selected) {
      if (selected === correctAnswer) {
        toast.success("Right Answer");
        handleRightAnswer(correctAnswer);
      } else {
        toast.warn("Wrong Answer!");
        handleWrongAnswer(correctAnswer);
      }
    }
  };

  const handleShowAnswer = () => {
    toast.info(correctAnswer);
  };

  return (
    <div className="border shadow-md p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          {parse(question)}
        </div>
        <button
          className="m-3"
          title="show the right answer"
          onClick={handleShowAnswer}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
      <div>
        {options.map((option, index) => (
          <Options
            handleCorrectAnswer={handleCorrectAnswer}
            question={question}
            key={index}
            option={option}
          ></Options>
        ))}
      </div>
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
