import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClasses } from '../../actions/index';
import './signup.css';


const SignupView = () => {
  const { classes } = useSelector((state) => state.classesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClasses());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getClasses])
  function renderSignup() {

  const today = new Date().toDateString();

    const scheduleRows = classes?.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item.time}</td>
          <td>{item.type}</td>
          <td>{item.spotsRemaining}</td>
          <td><button className="btn btn-primary">Reserve</button></td>
        </tr>
      )
    })
    return (
      <div>
        <h1>Choose a class - {today}</h1>
        <table className="table table-striped">
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
        </table>
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
