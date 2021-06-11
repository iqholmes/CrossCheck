import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ResultsView = () => {
  function renderResults() {
    return (
      <div>
        <h1>Workout Results</h1>
      </div>
    )
  }
  return (
    <div>
      {renderResults()}
    </div>
  )
};

export default ResultsView;