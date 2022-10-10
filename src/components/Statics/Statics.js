import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statics = () => {
  const data = useLoaderData().data;
  return (
    <div >
      <h2>This is static</h2>
      <LineChart width={900} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default Statics;