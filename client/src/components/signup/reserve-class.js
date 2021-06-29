import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAthletes } from '../../actions/index';

function ReserveClass({athletes, onOpenModal, onCloseModal, onSubmit}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedAthlete, setSelectedAthlete] = useState(false);

  useEffect(() => {
    dispatch(getAthletes());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAthletes]);

  const athleteList = useSelector(state => state.athleteList);
  const remainingAthletes = athleteList.filter(athlete => !athletes.includes(athlete._id));

  const handleOnClick = (e) => {
    e.preventDefault();
    if (selectedAthlete) {
      onSubmit(selectedAthlete);
    }
  }

  const handleOnChange = (e) => {
    e.preventDefault();
    setSelectedAthlete(e.target.value);
  }

  return (
    <>
      <Button 
        onClick={() => {setShow(true); onOpenModal();}}
        variant="primary reserve-class-button" >
        Reserve
      </Button>

      <Modal show={show} onHide={() => {setShow(false); onCloseModal();}}>
        <Modal.Header>
          <Modal.Title>
            Sign up for Class
          </Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <div key="athlete">
              <div className="form-group">
                <label>Find your name</label>
                <select
                className="form-select"
                name="athlete"
                onChange={handleOnChange}>
                  <option value={-1}>{'Select your name from the list...'}</option>
                  {remainingAthletes.map((athlete) => (
                    <option key={athlete._id} value={athlete._id}>
                      {athlete.firstName} {athlete.lastName}
                    </option>
                        ))}
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={() => {setShow(false); onCloseModal();}}>
            Close
          </Button>
            <Button disabled={!selectedAthlete} type="submit" variant="primary" onClick={handleOnClick}>
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default ReserveClass;
