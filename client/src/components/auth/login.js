import { Form, Button } from 'react-bootstrap';
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signin } from "../../actions";

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
    <h1>Login here</h1>
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
          ></input>
          {errors.password?.message}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      </>
  );
} 

export default Login;