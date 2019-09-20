import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import './Login.css';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();

      axiosWithAuth()
        .post("/login", inputs)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("/bubbles");
        })
        .catch(err => console.log(err));
    }
  }

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
    console.log(inputs);
  };


  return (
    <>
      
      <div className="wrapper fadeInDown">
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <div id="formContent">
        <h2 className="active"> Sign In </h2>
        <h2 className="inactive underlineHover">Sign Up </h2>

        <div className="fadeIn first"></div>

        <form className='wrapper' onSubmit={handleSubmit}>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="username"
            placeholder="login"
            value={inputs.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            value={inputs.password}
            onChange={handleInputChange}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <a className="underlineHover">Forgot Password?</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
