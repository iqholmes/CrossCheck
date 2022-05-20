import React from 'react';
import { Nav /* Tab, Tabs */ } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PostScoreView from './post-score-view';
/* import DealsContainer from '../deals/deals-container'; */
/* import { Link, Redirect, Switch } from 'react-router-dom'; */
//import './companies-view-style.css';

function PostScoreContainer () {
  return (
  <>
    <Nav variant="tabs" defaultActiveKey="/post-score">
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
    <PostScoreView />
  </>
  );
}

export default PostScoreContainer;