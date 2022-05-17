import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import { getResults } from '../../actions';
import './results.css';
import { getSecondsToTime } from '../../utils';

const ResultsView = () => {
  const data = useSelector((state) => state.resultPostData.results);
  // const timeString = data?.results.map(results => ({time: getSecondsToTime(results?.time), athlete: results?.athlete}))
  const authenticated = useSelector((state) => state.auth.authenticated);
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
      <XAxis dataKey="athlete" />
      <YAxis tickFormatter={(value) => getSecondsToTime(value)}/>
      <Tooltip formatter={(value) => getSecondsToTime(value)}/>
      <Legend />
      <Bar dataKey="time" fill="#8C00FF" />
    </BarChart>
    )
  }
  if (authenticated) {
  return (
    <div>
      {renderResults()}
      {renderChart()}
    </div>
  )} else {
    return (
      <h1><Link to="/login">Log in</Link> or <Link to ="/signup">sign up!</Link></h1>
    )
  }
};

export default ResultsView;