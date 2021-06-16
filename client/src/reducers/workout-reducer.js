import { GET_WORKOUT } from '../actions/index';

const defaultState = [];

const workoutReducer = function (state = defaultState, action) {
  switch (action.type) {
    case GET_WORKOUT: 
      return {
        workout: action.payload.data
      };
    default:
      return state;
  }
};

export default workoutReducer;