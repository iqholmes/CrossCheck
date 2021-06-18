import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  Modal } from 'react-bootstrap';
import { getWorkoutById, getWorkouts } from '../../actions';
import './post-score.css'

const PostScoreView = (props) => {
  const DAYS_OF_THE_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  function getDay() {
    const date = new Date();
    const dayIndex = date.getDay();
    return DAYS_OF_THE_WEEK[dayIndex];
  }
  const [show, setShow] = useState(false);
  const [reps, setReps] = useState(Number);
  const [time, setTime] = useState('');
  const { workout } = useSelector((state) => state.workoutData);
  const workoutDay = getDay();
  //const workoutId = props.match.params._id;
  const dispatch = useDispatch();
  const workoutId = "60cb46fb954049bd8e5d4a27"
  
  // const handleNewWorkoutResult = (e) => {
  //   e.preventDefault();

  //     dispatch(
  //       postNewWorkoutResult({
  //         reps,
  //         time,
  //       })
  //     )
  //   }
  useEffect(() =>{
    dispatch(getWorkoutById(workoutId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getWorkoutById]);

  function renderWorkout() {
    if (workout) {
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
        <Button variant="primary" onClick={() => setShow(true)}>
          Post Your Score
        </Button>
  
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header>
            <Modal.Title>Add a new Company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
            <div className="form-group">
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
            <div className="form-group">
              <label>Time</label>
              <input
                className="form-control"
                placeholder="Enter Time (MM:SS)" 
                value={time}
                onChange={(e) => setTime(e.target.value)} 
              ></input>
            </div>
            <br />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button>
            {/* <Button variant="primary" onClick={handleNewWorkoutResult}> */}
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
    }

  return (
    <div>
      {renderWorkout()}
      {renderAddCompanyModal()}
    </div>
  )
};

export default PostScoreView;