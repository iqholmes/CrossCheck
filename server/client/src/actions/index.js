import axios from 'axios';

export const GET_WORKOUT = "GET_WORKOUT";
export const GET_WORKOUTS = "GET_WORKOUTS"
export const GET_CLASSES = "GET_CLASSES";
export const POST_RESULT = "POST_RESULT";
export const GET_RESULTS = "GET_RESULTS";
export const GET_ATHLETES = "GET_ATHLETES";
export const GET_CLASS = "GET_CLASS";
export const POST_SIGNUP = "POST_SIGNUP";
export const POP_SIGNUP = "POP_SIGNUP";
export const AUTH_USER = "AUTH_USER";
export const AUTH_ERROR = "AUTH_ERROR";

const ROOT_URL = "http://localhost:8000"

export const getWorkouts = () => dispatch => {
   axios
    .get(`${ROOT_URL}/workouts`)
    .then(function (response) {
      dispatch({type:GET_WORKOUTS,
      payload:response})
    })
    .catch((error) => {
      console.log("Error", error)
    })
}

export const getWorkoutById = (_id) => dispatch => {
  axios
    .get(`${ROOT_URL}/workouts/${_id}`)
    .then(function (response) {
      dispatch({type: GET_WORKOUT,
      payload: response,})
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getWorkoutByDay = () => dispatch => {
  axios
    .get(`${ROOT_URL}/postscores`)
    .then(function (response) {
      dispatch ({type: GET_WORKOUT,
      payload: response,})
    })
    .catch(function (error) {
      console.log('Error', error);
    });
}

export const getClasses = () => dispatch => {
  axios.get(`${ROOT_URL}/classes`)
    .then(function (response) {
     dispatch({type: GET_CLASSES, payload: response.data })
    })
    .catch(function (error) {
      console.log('Error', error);
    });
}

export const getClassById = (_id) => dispatch => {
   axios
    .get(`${ROOT_URL}/classes/${_id}`)
    .then(function (response) {
      dispatch({type:GET_CLASS,
      payload: response})
    })
    .catch((error) => {
      console.log("Error", error)
    })
}

export const postNewAthleteSignup = (_id, _athleteId) => dispatch => {
  axios 
    .post(`${ROOT_URL}/classes/${_id}/athlete/${_athleteId}`)
    .then (function (response) {
      dispatch({type: POST_SIGNUP,
      payload: response})
    })
    .catch((error) => {
      console.log('Error adding athlete to class', error)
    });
}

export const removeAthleteFromClass = (_id, _athleteId) => dispatch => {
  axios 
    .post(`${ROOT_URL}/classes/${_id}/athlete/${_athleteId}/remove`)
    .then (function (response) {
      dispatch ({type: POP_SIGNUP,
      payload: response})
    })
    .catch((error) => {
      console.log('Error removing athlete from class', error);
    });
}

export const getResults = () => dispatch => {
  axios
    .get(`${ROOT_URL}/postscores`)
    .then(function (response) {
     dispatch({type: GET_RESULTS, payload: response.data })
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const postNewWorkoutResult = (_id, newResult) => dispatch => {
  axios
    .post(`${ROOT_URL}/workouts/${_id}/results`, newResult)
    .then(function (response) {
      dispatch({type: POST_RESULT,
      payload: response.data})
    })
    .catch((error) => {
      console.log(error);
    });
}

export const getAthletes = () => dispatch => {
  axios.get(`${ROOT_URL}/athletes`)
    .then(function (response) {
     dispatch({type:GET_ATHLETES, payload: response })
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const signup = (formProps, callback) => dispatch => {
  axios.post(
    `${ROOT_URL}/auth/signup`,
    formProps
  ).then(function (response){
    dispatch({type: AUTH_USER, payload: response.data });
    localStorage.setItem('token', response.data.token);
    callback();
  })
  .catch(function(error) {
    dispatch({ type: AUTH_ERROR, payload: error})
  });
};

export const signin = (formProps, callback) => dispatch => {
  axios.post(
    `${ROOT_URL}/auth/signin`,
    formProps
  ).then(function (response){
    dispatch({type: AUTH_USER, payload: response.data });
    localStorage.setItem('token', response.data.token);
    callback();
  })
  .catch(function(error) {
    dispatch({ type: AUTH_ERROR, payload: error})
  });
};

export const fetchUser = () => dispatch => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
  };

  axios.get(
    `${ROOT_URL}/auth/current_user`,
    config
  ).then(function (response) {
    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem('token', response.data.token);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const signout = (callback) => dispatch => {
  localStorage.removeItem('token');

  dispatch({ type: AUTH_USER, payload: '' });
  callback()
};