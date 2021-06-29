import { GET_CLASSES, POST_SIGNUP, POP_SIGNUP } from '../actions/index';

const defaultState = [];

const classesReducer = function(state = defaultState, action) {
  switch (action.type) {
    case GET_CLASSES:
      return {
        classes: action.payload
      }
    case POST_SIGNUP:
      return {
        result: action.payload.data
      }
    case POP_SIGNUP: 
      return {
        result: action.payload.data
      }
    default:
      return state;
  }
}

export default classesReducer;