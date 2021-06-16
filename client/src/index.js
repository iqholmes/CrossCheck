import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PostScoreView from './components/post/post-score-view';
import ResultsView from './components/results/results-view';
import SignupView from './components/signup/signup-view';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/nav.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Nav /> {/* Nav bar */}
      <Switch>
        <Route exact path="/" component={SignupView} />
        <Route path="/results" component={ResultsView} />
        <Route path="/post-score" component={PostScoreView} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
