import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClasses, postNewAthleteSignup, removeAthleteFromClass } from '../../actions/index';
import './signup.css';
import ReserveClass from './reserve-class';
import { Table } from 'react-bootstrap';
import "bootstrap/js/src/collapse.js";
import { Button } from 'reactstrap';

const SignupView = () => {
  const { classes } = useSelector((state) => state.classesData);
  const athletes = useSelector((state) => state.athleteList)
  const dispatch = useDispatch();
  const [selectedClassId, setSelectedClassId] = useState(false);
  const [showAthletes, setShowAthletes] = useState(false);

  const toggleAthleteShow = () => {
    setShowAthletes(!showAthletes);
  };

  useEffect(() => {
    dispatch(getClasses());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getClasses])

  
  function renderSignup() {

    const handleReservation = (athleteId) => {
      dispatch(postNewAthleteSignup(selectedClassId, athleteId))
        .then(() => dispatch(getClasses()));
    }

    const handleCancellation = (athleteId) => {
      dispatch(removeAthleteFromClass(selectedClassId, athleteId))
        .then(() => dispatch(getClasses()));
    }

    const today = new Date().toDateString();

    const scheduleRows = classes?.map((item) => {
      const signedUpAthletes = athletes.filter(athlete => item.athletes.includes(athlete._id));
      return (
        <>
          <tr key={item._id} onClick={toggleAthleteShow}>
              <td>{item.time}</td>
              <td>{item.type}</td>
              <td>{item.spotsRemaining - Math.max(item.athletes.length, 0)}</td>
              <td>
              <ReserveClass athletes={item.athletes || []} onOpenModal={() => setSelectedClassId(item._id)} onCloseModal={() => setSelectedClassId(false)} onSubmit={handleReservation} />
              </td>
          </tr >
          {signedUpAthletes.map((a, _id)=> (
              showAthletes? 
              <tr key={a._id}>
                <td><strong>{a.firstName} {a.lastName}</strong></td>
                <td></td>
                <td></td>
                <td><Button color="danger" onClick={handleCancellation}>Cancel</Button></td>
              </tr>:null
            ))}
        </>
      )
    })
    
    return (
      <div>
        <h1>Choose a class - {today}</h1>
        <Table hover>
          <thead className="table-head">
            <tr>
              <th>Time</th>
              <th>Class Type</th>
              <th>Spots Left</th>
              <th>Reserve</th>
            </tr>
          </thead>
          <tbody>
          {scheduleRows}
          </tbody>
          </Table>
      </div>
    )
  }
  return (
    <div>
      {renderSignup()}
    </div>
  )
};

export default SignupView;
