import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Home() {
  const data = [
    { name: 'Jan', usage: 400 },
    { name: 'Feb', usage: 300 },
    { name: 'Mar', usage: 200 },
    { name: 'Apr', usage: 278 },
    { name: 'May', usage: 189 },
    { name: 'Jun', usage: 239 },
    { name: 'Jul', usage: 349 },
    { name: 'Aug', usage: 400 },
    { name: 'Sep', usage: 300 },
    { name: 'Oct', usage: 200 },
    { name: 'Nov', usage: 278 },
    { name: 'Dec', usage: 189 },
  ];

  return (
    <div className="home">
      <h1>Energy Usage in a Home</h1>
      <p>Here's a chart showing the monthly energy usage in a home:</p>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="usage" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
}
