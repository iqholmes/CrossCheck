import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getResults } from '../../actions';
import './results.css';


const ResultsView = () => {
  const data = useSelector((state) => state.resultPostData.results);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResults());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getResults])
  
  function renderResults() {
    return (
      <div>
        <h1>Workout Results</h1>
      </div>
    )
  }
  function renderChart() {
    return (
    <BarChart width={700} height={400} data={data?.results || []}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="time" fill="#82ca9d" />
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