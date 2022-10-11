import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
  const topics = useLoaderData().data;
  return (
    <div className='container mx-auto grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-28 mt-20'>
      {topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)}
    </div>);
};

export default Topics;