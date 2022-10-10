import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
  const topics = useLoaderData().data;
  return (
    <div>
      {topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)}
    </div>
  );
};

export default Topics;