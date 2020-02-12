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
    width={450}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
     <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="impressions" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="clicks" orientation="right" stroke="#82ca9d" />
        <YAxis yAxisId="clicks" orientation="revenue" stroke="#c8c6ed" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="impressions" dataKey="impressions" fill="#8884d8" />
        <Bar yAxisId="clicks" dataKey="clicks" fill="#82ca9d" />
        <Bar yAxisId="clicks" dataKey="revenue" fill="#c8c6ed" />
  </BarChart>
);

export default DailyStats;
