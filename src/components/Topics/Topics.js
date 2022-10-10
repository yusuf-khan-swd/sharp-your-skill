import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
  const topics = useLoaderData().data;
  return (
    <div>
      <h2>This is topics {topics.length} </h2>
    </div>
  );
};

export default Topics;