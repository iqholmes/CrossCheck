import { combineReducers } from "redux";
import workoutReducer from "./workout-reducer";
import workoutsReducer from "./workouts-reducer";
import classesReducer from "./classes-reducer";

const rootReducer = combineReducers({
  workoutData: workoutReducer,
  workoutsData: workoutsReducer,
  classesData: classesReducer
});

export default rootReducer