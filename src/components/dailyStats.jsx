import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const DailyStats = ({ data }) => (
  <BarChart
    width={900}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="2 2" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="impressions" fill="#8884d8" />
    <Bar dataKey="clicks" fill="#82ca9d" />
    <Bar dataKey="revenue" fill="#8664d8" />
  </BarChart>
);

export default DailyStats;
