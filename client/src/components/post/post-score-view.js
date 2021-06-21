import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  Modal } from 'react-bootstrap';
import { getWorkoutByDay, postNewWorkoutResult } from '../../actions';
import { getSecondsToTime, getTimeInSeconds } from '../../utils';
import './post-score.css'

const PostScoreView = () => {
  const [show, setShow] = useState(false);
  const [reps, setReps] = useState(Number);
  const [time, setTime] = useState('');
  const { workout } = useSelector((state) => state.workoutData);

  const dispatch = useDispatch();
  
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
        time
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
      console.log('4:10', getTimeInSeconds('4:10'))
      console.log('04:10', getTimeInSeconds('04:10'))
      console.log(getSecondsToTime(250))
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
            {workout && (<form>
              {workout.type === 'reps' && (<>
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
              </>)}
              {workout.type === 'time' && (<>
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
              </>)}
            </form>)}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleNewWorkoutResult}>
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