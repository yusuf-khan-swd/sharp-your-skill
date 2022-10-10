import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statics = () => {
  const data = useLoaderData().data;
  return (
    <div>
      <h2>This is static</h2>
      <LineChart width={900} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Statics;