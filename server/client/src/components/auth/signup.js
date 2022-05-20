import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signup } from "../../actions";

const Signup = () => {
  const userSchema = yup
    .object()
    .shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
    })
    .required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = (data) => {
    dispatch(
      signup(data, () => {
        history.push("/class");
      })
    );
  };

  return (
    <>
    <div className="container col-md-6">
      <h2>Create a CrossCheck account</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              {...register('email', { required: true })}
              name="email"
            ></input>
            {errors.email?.message}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              {...register('password', { required: true })}
              name="password"
              type="password"
            ></input>
            {errors.password?.message}
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              {...register('firstName', { required: true })}
              name="firstName"
            ></input>
            {errors.firstName?.message}
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              {...register('lastName', { required: true })}
              name="lastName"
            ></input>
            {errors.lastName?.message}
          </div>

          <button className="btn btn-primary login-button" type="submit">
            Sign up
          </button>
        </form>
        <p>Already have an account? Log in <Link to="/login">here</Link></p>
        </div>
      </>
  );
} 

export default Signup;