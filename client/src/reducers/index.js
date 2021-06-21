import { combineReducers } from "redux";
import workoutReducer from "./workout-reducer";
import workoutsReducer from "./workouts-reducer";
import classesReducer from "./classes-reducer";
import resultReducer from "./result-reducer";

const rootReducer = combineReducers({
  workoutData: workoutReducer,
  workoutsData: workoutsReducer,
  classesData: classesReducer,
  resultPostData: resultReducer
});

export default rootReducer