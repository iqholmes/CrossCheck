import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const ResultsView = () => {
  const data = [
    {
      name: 'Ian',
      reps: 340,
    },
    {
      name: 'Ryan',
      reps: 350,
    },
    {
      name: 'Alana',
      reps: 220,
    },
    {
      name: 'Tasha',
      reps: 219,
    }
  ];
  function renderResults() {
    return (
      <div>
        <h1>Workout Results</h1>
      </div>
    )
  }
  function renderChart() {
    return (
    <BarChart width={700} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="reps" fill="#82ca9d" />
    </BarChart>
    )
  }
  return (
    <div>
      {renderResults()}
      {renderChart()}
    </div>
  )
};

export default ResultsView;