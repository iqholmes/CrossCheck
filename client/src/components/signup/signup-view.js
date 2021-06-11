import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SignupView = () => {
  function renderSignup() {
    return (
      <div>
        <h1>Choose a class</h1>
      </div>
    )
  }
  return (
    <div>
      {renderSignup()}
    </div>
  )
};

export default SignupView;
