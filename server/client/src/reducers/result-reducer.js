import { POST_RESULT, GET_RESULTS } from '../actions/index';

const defaultState = [];

const resultReducer = function (state = defaultState, action) {
  switch (action.type) {
    case GET_RESULTS:
      return {
        results: action.payload
      }
    case POST_RESULT: 
      return {
        result: action.payload.data
      }
    default: 
      return state;
  }
};

export default resultReducer;