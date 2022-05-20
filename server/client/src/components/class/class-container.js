import React from 'react';
import { Nav /* Tab, Tabs */ } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SignupView from './class-view';

/* import DealsContainer from '../deals/deals-container'; */
/* import { Link, Redirect, Switch } from 'react-router-dom'; */
//import './companies-view-style.css';

function ClassContainer () {
  return (
  <>
    <Nav variant="tabs" defaultActiveKey="/class">
      <LinkContainer to="/class">
        <Nav.Item>
          <Nav.Link href="/class">Choose a Class</Nav.Link>
        </Nav.Item>
      </LinkContainer>
      <LinkContainer to="/post-score">
        <Nav.Item>
          <Nav.Link href="/post-score">Post Your Score</Nav.Link>
        </Nav.Item>
      </LinkContainer>
      <LinkContainer to="/results">
        <Nav.Item>
          <Nav.Link href="/results">Workout Results</Nav.Link>
        </Nav.Item>
      </LinkContainer>
    </Nav>
    <SignupView />
  </>
  );
}

export default ClassContainer;