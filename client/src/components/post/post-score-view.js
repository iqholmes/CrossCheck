import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  Modal } from 'react-bootstrap';
import { getWorkoutByDay, postNewWorkoutResult, fetchUser } from '../../actions';
import { getTimeInSeconds } from '../../utils';
import './post-score.css';
// import ReserveClass from '../class/reserve-class';

const PostScoreView = () => {
  const [show, setShow] = useState(false);
  const [reps, setReps] = useState(Number);
  const [time, setTime] = useState('');
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const authenticated = useSelector((state) => state.auth.authenticated);
  const userString = `${firstName} ${lastName}`
  const [athlete, setAthlete] = useState(userString);
  const email = useSelector((state) => state.auth.email);

  const { workout } = useSelector((state) => state.workoutData);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (authenticated) {
      dispatch(fetchUser());
    } 
  }, [authenticated, dispatch]);

  const handleNewWorkoutResult = (e) => {
    e.preventDefault();

    const timeRegex = /^(?:0?\d|1[012]):[0-5]\d$/;

    if (workout.type === 'time' && !timeRegex.test(time)) {
      alert('Please enter a valid time format. i.e. 00:00');
      return;
    }

    const result = workout.type === 'reps' ? {reps} : workout.type === 'time' ? {time} : undefined;
    if (result === undefined) {
      setShow(false);
      return;
    }
    
    dispatch(
      postNewWorkoutResult(workout._id, {
        reps,
        time: getTimeInSeconds(time), // this will take the string and send it to the BE as a number in secs
        athlete
      })
    );
    setShow(false);
  };

  useEffect(() =>{
    dispatch(getWorkoutByDay());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getWorkoutByDay]);

  function renderWorkout() {
    if (workout) {
      // console.log('4:10', getTimeInSeconds('4:10'))
      // console.log('04:10', getTimeInSeconds('04:10'))
      //console.log(getSecondsToTime(250)) 
      // NOTE: when displaying the "time" (from BE in seconds), use this function to show it as a "time string"
      return (
        <div>
          <h1>Post Your Score</h1>    
          <hr></hr>
          <h3 key={workout.day}>{workout.name}</h3>
            <div>{workout.length}</div>
            <div>{workout.repCount1}</div>
            <div>{workout.movement1}</div>
            <div>{workout.repCount2}</div>
            <div>{workout.movement2}</div>
            <div>{workout.repCount3}</div>
            <div>{workout.movement3}</div>
            <div>{workout.repCount4}</div>
            <div>{workout.movement4}</div>
            <div>{workout.repCount5}</div>
            <div>{workout.movement5}</div>
            <div>{workout.weight}</div>
            <br></br>
        </div>
      )
    }
    return (
      <div>
        <h1>Post Your Score</h1>    
        <hr></hr>
        {/* <div>{workoutPost}</div> */}
      </div>
    )
  };


  function renderAddCompanyModal() {
    return (
      <>
        <Button variant="primary post-score-button" onClick={() => setShow(true)}>
          Post Your Score
        </Button>
  
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header>
            <Modal.Title>Post your Score</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {workout && (<form>
              {workout.type === 'reps' && (<>
                <div className="form-group">
                <label>Athlete Name</label>
                  <input
                    required
                    className="form-control"
                    placeholder="Enter Your Name"
                    value={athlete}
                    onChange={(e) => setAthlete(userString)} 
                  ></input>
                  <label>Reps</label>
                  <input
                    required
                    className="form-control"
                    placeholder="Enter Total Reps"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)} 
                  ></input>
                </div>
                <br />
              </>)}
              {workout.type === 'time' && (<>
                <div className="form-group">
                <label>Athlete Name</label>
                  <input
                    required
                    className="form-control"
                    placeholder="Enter Your Name"
                    value={athlete}
                    onChange={(e) => setAthlete(e.target.value)} 
                  ></input>
                  <label>Time</label>
                  <input
                    className="form-control"
                    placeholder="Enter Time (MM:SS)" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)} 
                  ></input>
                </div>
                <br />
              </>)}
            </form>)}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary post-score-button" onClick={handleNewWorkoutResult}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
    }
  if (authenticated) {
    return (
      <div>
        {renderWorkout()}
        {renderAddCompanyModal()}
      </div>
    )} else {
      return (
        <h1><Link to="/login">Log in</Link> or <Link to ="/signup">sign up!</Link></h1>
      )
    }
};

export default PostScoreView;