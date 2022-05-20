import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signin } from "../../actions";
import './login.css';

const Login = () => {
  const userSchema = yup
    .object()
    .shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = (data) => {
    dispatch(
      signin(data, () => {
        history.push("/class");
      })
    );
  };

  return (
    <>
    <div className="container col-md-6">
      <h1>CrossCheck Login</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="row justify-content-center">
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control "
              {...register('email', { required: true })}
              name="email"
            ></input>
            {errors.email?.message}
          </div>
          <div> 
            <label>Password</label>
            <input
              className="form-control"
              {...register('password', { required: true })}
              name="password"
              type="password"
            ></input>
            {errors.password?.message}
          </div>
          <div>
            <button className="btn btn-primary login-button" type="submit">
              Login
            </button>
            </div>
        </form>
        
        <p>Need to create an account? Sign up <Link to="/signup">here</Link></p>
      </div>
    </>
  );
} 

export default Login;