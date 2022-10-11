import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='h-screen text-center flex justify-center items-center'>
      <div>
        <FontAwesomeIcon className='text-7xl text-orange-400 mb-3' icon={faTriangleExclamation}></FontAwesomeIcon>
        <h2 className='text-8xl font-bold mb-5'>404</h2>
        <p className='text-slate-400 mb-5'>Error Occurred!!-File not Found</p>
        <Link to='/home'>
          <button className='bg-orange-500 text-white px-5 rounded-md font-semibold'>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;