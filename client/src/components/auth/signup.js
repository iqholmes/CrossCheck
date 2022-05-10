import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
    <h1>Signup here</h1>
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

        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-control"
            {...register('firstName', { required: true })}
            name="firstName"
          ></input>
          {errors.password?.message}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            className="form-control"
            {...register('lastName', { required: true })}
            name="lastName"
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

export default Signup;