import axios from 'axios';

export const GET_WORKOUT = "GET_WORKOUT";
export const GET_WORKOUTS = "GET_WORKOUTS"
export const GET_CLASSES = "GET_CLASSES";

const ROOT_URL = "http://localhost:8000"

export function getWorkouts() {
  return axios
    .get(`${ROOT_URL}/workouts`)
    .then((response) => ({
      type:GET_WORKOUTS,
      payload:response.data
    }))
    .catch((error) => {
      alert("Error")
    })
}

export function getWorkoutById(_id) {
  return axios
    .get(`${ROOT_URL}/workouts/${_id}`)
    .then((response) => ({
      type: GET_WORKOUT,
      payload: response,
    }))
}

export function getClasses() {
  return axios
    .get(`${ROOT_URL}/classes`)
    .then((response) => ({
      type:GET_CLASSES,
      payload: response.data
    }))
    .catch((error) => {
      alert("Error")
    })
}

export function postNewWorkoutResult(newResult) {
  
}