import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData().data;
  return (
    <div className="mb-28 mt-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Available <span className="text-red-500"> {data.length} </span>
        Topics Questions Statistics
      </h2>
      <div className="w-4/5 h-96 mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            <Legend />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
