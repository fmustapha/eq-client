import React from "react";
import {
  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const HourlyEvents = ({data}) => {
  return (
    <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="events" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="hour" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="events" dataKey="events" fill="#8884d8" />
        <Bar yAxisId="hour" dataKey="hour" fill="#82ca9d" />
      </BarChart>
  );
};

export default HourlyEvents;
