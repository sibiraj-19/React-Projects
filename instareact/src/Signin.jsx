import React from "react";
import logo from "./facebooklogo1.png";
import name from "./name.png";
import { Link } from "react-router-dom";
const Signin = () => {
  const Styles = {
    body: {
      backgroundImage:
        "linear-gradient(145deg,#5B5DDF,#8601AF,#DD2A7B,#FEDA77,#F58529)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      fontSize: "large",
    },
    signup: {
      backgroundColor: "white",
      marginTop: "6.6%",
      border: "black 2px solid",
      width: "25%",
    },
    input: {
      height: "35px",
      width: "250px",
    },
    button: {
      height: "35px",
      width: "250px",
      borderRadius: "10px",
      backgroundColor: "rgb(47, 106, 231)",
      color: "white",
      fontWeight: "bolder",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    p: {
      fontWeight: "lighter",
      fontSize: "17px",
      fontFamily: "sans-serif",
    },
    login: {
      border: "black 2px solid",
      backgroundColor: "white",
      width: "25%",
      height: "70px",
      paddingTop: "2%",
    },
  };
  return (
    <>
      <html style={Styles.body}>
        <center>
          <div style={Styles.signup}>
            <h2>
              <img src={name} alt="name" height="39px" />
            </h2>
            <p style={Styles.p}>
              Sign up to see photos and <br />
              videos from your friends.
            </p>
            <button style={Styles.button}>
              <div>
                <img src={logo} alt="logo" height="29px" float="right" />
              </div>
              <div>Log in with Facebook</div>
            </button>
            <hr />
            <p style={Styles.p}>or</p>
            <form action="">
              <input
                style={Styles.input}
                type="text"
                placeholder="Phone number, or email"w
                required
              />
              <br /> <br />
              <input
                style={Styles.input}
                type="text"
                placeholder="Full Name"
                required
              />
              <br /> <br />
              <input
                style={Styles.input}
                type="text"
                placeholder="Username"
                required
              />{" "}
              <br />
              <br />
              <input
                style={Styles.input}
                type="password"
                placeholder="Password"
                required
              />{" "}
              <br />
              <br />
              <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <p style={{ fontSize: "13px" }}>
                  People who use our service may have uploaded your contact
                  information to Instagram. <br /> Learn More <br />
                  <br />
                  By signing up, you agree to our Terms , Privacy Policy and
                  Cookies Policy .
                </p>
              </div>
              <button id="button" style={Styles.button} type="submit">
                Sign UP
              </button>
              <br />
              <br />
            </form>
          </div>
          <br />
          <div style={Styles.login}>
            Already an user <Link to="/">Log in.</Link>
          </div>
        </center>
      </html>
    </>
  );
};

export default Signin;
