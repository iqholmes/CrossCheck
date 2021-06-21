import axios from 'axios';

export const GET_WORKOUT = "GET_WORKOUT";
export const GET_WORKOUTS = "GET_WORKOUTS"
export const GET_CLASSES = "GET_CLASSES";
export const POST_RESULT = "POST_RESULT";
export const GET_RESULTS = "GET_RESULTS";

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

export function getWorkoutByDay() {
  return axios
    .get(`${ROOT_URL}/postscores`)
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

export function getResults() {
  return axios
    .get(`${ROOT_URL}/postscores`)
    .then((response) => ({
      type: GET_RESULTS,
      data: response.data
    }))
    .catch((error) => {
      alert('Error');
    });
}

export function postNewWorkoutResult(_id, newResult) {
  return axios
    .post(`${ROOT_URL}/workouts/${_id}/results`, newResult)
    .then((response) => ({
      type: POST_RESULT,
      payload: response
    }))
    .catch((error) => {
      alert('Error');
    });
}

