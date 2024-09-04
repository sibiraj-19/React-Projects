import React from "react";
import "./Login.css";
import logo from "./facebooklogo.png";
import name from "./name.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <center>
        <div id="login">
          <h2>
            <img src={name} alt="name" height="39px" />
          </h2>
          <form action="">
            <input
              type="text"
              placeholder="Phone number,Username, or email "
              required
            />
            <br /> <br />
            <div>
            <input type="password" placeholder="Password" required /><i></i></div>
            <br />
            <button type="submit">Log In</button>
            <br />
            <br />
          </form>
          <hr />
          or
          <br />
          <div id="img">
            <div>
              <img src={logo} alt="logo" height="29px" />
            </div>
            <div> Log in with Facebook </div>
            <br />
            <br />
          </div>
          Forgot Password ?
        </div>{" "}
        <br />
        <div id="signup">
          Don't have an account? <Link to="Signup">Sign up.</Link>
          </div>
        <br />
      </center>
    </>
  );
};

export default Login;
