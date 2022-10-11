import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  return (
    <div className='shadow-lg border rounded-lg'>
      <img className='h-32 w-32 rounded-lg m-2 border' src={logo} alt="" />
      <div className='ml-2 mb-2'>
        <h5 className='font-bold text-xl mb-2'> {name} </h5>
        <p className='mb-2'>Total Quiz: {total} </p>
        <Link to={`/topic/${id}`}>
          <button className='bg-zinc-400 py-1 px-2 rounded-md'>Start Practice</button>
        </Link>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Topic;