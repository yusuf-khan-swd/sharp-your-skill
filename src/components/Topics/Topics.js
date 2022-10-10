import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
  const topics = useLoaderData().data;
  return (
    <div>
      <h2>This is topics {topics.length} </h2>
      {topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)}
    </div>
  );
};

export default Topics;