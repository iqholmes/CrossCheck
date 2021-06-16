import { GET_WORKOUTS } from '../actions/index';

const defaultState = []

const workoutsReducer = function(state = defaultState, action) {
  switch (action.type) {
    case GET_WORKOUTS:
      return {
        workouts: action.payload
      }
    default:
      return state;
  }
}

export default workoutsReducer;
