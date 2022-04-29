import React from 'react';
import { Nav /* Tab, Tabs */ } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ResultsView from './results-view';
/* import { Link, Redirect, Switch } from 'react-router-dom'; */
//import './companies-view-style.css';

function ResultsContainer () {
  return (
  <>
    <Nav variant="tabs" defaultActiveKey="/results">
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
    <ResultsView />
  </>
  );
}

export default ResultsContainer;