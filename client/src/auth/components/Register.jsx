import React, { useState } from "react";
import { registerUser } from "../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../redux/authAction";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // state
  // state
  // dispatch
  // useDispathc : its a hook returns an object with a dispatch method(thunk ==> async operation) ==> to call our actions.
  // thunk : will start its journey from component to reducer to share the data via action
  const dispatch = useDispatch();
  // useReducer ; to get the data from the store.

  // reducer / data from the state
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  // navigation hook
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "abhi",
    email: "",
    password: "",
    password2: "",
  });
  // destructure formData
  const { name, email, password, password2 } = formData;
  //onSubmit function
  const onSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    console.log("Register form submitted", formData);
    dispatch(registerAction({ name, email, password }));
    // we need to call our action

    // const result = registerUser({
    //   name: formData.name,
    //   email: formData.email,
    //   password: formData.password,
    // });
    // console.log(result);
    // Here you would typically handle the registration logic, such as sending the data to an API
  };
  // onChange function
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // const
  //onChange: name of the event handler ==> onChange js event==> form
  // e: event object
  // setFormData: function to update the state
  //e.target.name: name of the input field that triggered the event
  //e.target.value: value of the input field that triggered the event
  /// ...formData : spread operator to copy the existing state
  //    const name = formData.name
  //    const email = formData.email
  //    const password = formData.password
  //    const password2 = formData.password2

  // const
  // formData state variables / name
  // setFormData function to update state ==> change the data there , we have to use the setFormData function
  if (isAuthenticated) {
    navigate("/dashboard/");
  }
  return (
    <>
      <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Create Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
            <small class="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={onChange}
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};

export default Register;
