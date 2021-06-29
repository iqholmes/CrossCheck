import { GET_ATHLETES } from '../actions/index';

const defaultState = [];

const athletesReducer = function (state = defaultState, action) {
  switch (action.type) {
    case GET_ATHLETES:
      return action.payload.data;
    default:
      return state;
  }
};

export default athletesReducer;