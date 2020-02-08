import React from 'react';
import {
  BarChart, Bar,XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const Poi = ({data}) => {
  return ( 
    <BarChart
        width={900}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="lat" fill="#8884d8" />
        <Bar dataKey="lon" fill="#82ca9d" />
      </BarChart>
   );
}
 
export default Poi;