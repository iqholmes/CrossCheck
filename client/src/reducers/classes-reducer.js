import { GET_CLASSES } from '../actions/index';

const defaultState = [];

const classesReducer = function(state = defaultState, action) {
  switch (action.type) {
    case GET_CLASSES:
      return {
        classes: action.payload
      }
    default:
      return state;
  }
}

export default classesReducer;