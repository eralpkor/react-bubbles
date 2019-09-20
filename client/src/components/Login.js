import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [inputs, setIn]



  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Sign In </h2>
        <h2 className="inactive underlineHover">Sign Up </h2>

        <div className="fadeIn first"></div>

        <form onSubmit={handleSubmit}>
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
