import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const PostScoreView = () => {
  function renderPostScore() {
    return (
      <div>
        <h1>Post Your Score</h1>
      </div>
    )
  }
  return (
    <div>
      {renderPostScore()}
    </div>
  )
};

export default PostScoreView;