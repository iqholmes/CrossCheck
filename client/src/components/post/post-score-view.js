import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  Modal } from 'react-bootstrap';
import { getWorkoutById, getWorkouts } from '../../actions';

const PostScoreView = (props) => {
  const [show, setShow] = useState(false);
  const [reps, setReps] = useState(Number);
  const [time, setTime] = useState('');
  const { workout } = useSelector((state) => state.workoutData);
  const workoutId = props.match.params._id;

  const dispatch = useDispatch();
  
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
    const workoutPost = workout?.map((workout) => {
      return (
        <div>
          <h3 key={workout._id}>{workout.name}</h3>
          <p>{workout.length}</p>
          <p>{workout.repCount1}</p>
          <p>{workout.movement1}</p>
          <p>{workout.repCount2}</p>
          <p>{workout.movement2}</p>
          <p>{workout.repCount3}</p>
          <p>{workout.movement3}</p>
          <p>{workout.repCount4}</p>
          <p>{workout.movement4}</p>
          <p>{workout.repCount5}</p>
          <p>{workout.movement5}</p>
          <p>{workout.weight}</p>
        </div>
      )
    }
   )
    return (
      <div>
        <h1>Post Your Score</h1>    
        <hr></hr>
        <p>{workoutPost}</p>
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