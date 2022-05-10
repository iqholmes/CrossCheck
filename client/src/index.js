import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/nav.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import promise from 'redux-promise';
import reducers from './reducers';
import PostScoreContainer from './components/post/post-score-container';
import ResultsContainer from './components/results/results-container';
import ClassContainer from './components/class/class-container';
import Login from './components/auth/login';
import Signup from './components/auth/signup';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Nav /> {/* Nav bar */}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/class" component={ClassContainer} />
        <Route path="/results" component={ResultsContainer} />
        <Route path="/post-score" component={PostScoreContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


