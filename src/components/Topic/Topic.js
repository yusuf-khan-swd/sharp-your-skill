import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  return (
    <div>
      <img className='h-32 w-32' src={logo} alt="" />
      <div>
        <h5> {name} </h5>
        <p>Total Quiz: {total} </p>
        <Link to={`/topic/${id}`}>
          <button className='bg-zinc-400 py-1 px-2'>Start Practice</button>
        </Link>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Topic;