import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/nav.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import PostScoreContainer from './components/post/post-score-container';
import ResultsContainer from './components/results/results-container';
import SignupContainer from './components/signup/signup-container';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Nav /> {/* Nav bar */}
      <Switch>
        <Route exact path="/" component={SignupContainer} />
        <Route path="/results" component={ResultsContainer} />
        <Route path="/post-score" component={PostScoreContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


