import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  return (
    <div className='shadow-lg border rounded-lg pb-2 w-60 mx-auto'>
      <img className='h-56 rounded-lg m-2 border' src={logo} alt="" />
      <div className='ml-2 mb-2'>
        <h5 className='font-bold text-3xl mb-2'> {name} </h5>
        <p className='mb-2 text-slate-400 text-xl'>Total Quiz: {total} </p>
        <Link to={`/topic/${id}`}>
          <button className='bg-zinc-400 hover:bg-zinc-500 py-1 px-2 text-2xl rounded-md'>Start Practice</button>
        </Link>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Topic;