import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
  const topics = useLoaderData().data;

  return (
    <div>
      <div className='h-32'>
        <h2>This is Hero Section</h2>
      </div>
      <div className='container mx-auto grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-8'>
        {topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)}
      </div>
    </div>
  );
};

export default Home;