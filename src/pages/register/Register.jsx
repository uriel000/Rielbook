import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Rielbook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Rielbook.
          </span>
        </div>
        <div className="logininRight">
          <div className="loginBox">
            <input type="text" className="loginInput" placeholder="Username" />
            <input type="email" className="loginInput" placeholder="Email" />
            <input
              type="password"
              className="loginInput"
              placeholder="Password"
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Password Again"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
