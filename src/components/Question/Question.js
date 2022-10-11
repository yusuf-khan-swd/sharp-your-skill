import parse from 'html-react-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Options from '../Options/Options';

const Question = ({ loadedQuestion }) => {
  const { correctAnswer, question, options } = loadedQuestion;

  const handleCorrectAnswer = (event) => {
    const selected = event.target.value;
    if (selected) {

      if (selected === correctAnswer) {
        toast.success('Right Answer');
      }
      else {
        toast.warn('Wrong Answer!');
      }
    }
    // if (event.target.textContent.trim() === correctAnswer) {
    //   toast.success('Right Answer');
    // }
    // else {
    //   toast.warn('Wrong Answer');
    // }
  };

  const handleShowAnswer = () => {
    toast.info(correctAnswer);
  }


  return (
    <div>
      <div className='flex'>
        {parse(question)}
        <button onClick={handleShowAnswer}>
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
      <div>
        {/* {options.map((option, index) => <div onClick={handleCorrectAnswer} key={index}> {option} </div>)} */}
        {options.map((option, index) => <Options handleCorrectAnswer={handleCorrectAnswer} key={index} option={option}></Options>)}
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