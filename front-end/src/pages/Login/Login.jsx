import React, { useContext, useState } from "react";

import "./Login.scss";

import { AuthContext } from "../../context/AuthContext";
import axiosInstance from "../../api/axios";

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(JSON.stringify({ ID: roll, Password: password, Role: role }));
      const response = await axiosInstance.post(
        "/auth/login",
        JSON.stringify({ ID: roll, Password: password, Role: role }),
        { headers: { "Content-Type": "application/json" } }
      );

      setAuth(response?.data?.accessToken);
      setErrMsg("");
      setPassword("");
      setRoll("");
      setSuccess(true);

      const accessToken = response?.data?.accessToken;
      setAuth({ accessToken });
    } catch (error) {
      console.log(error);
      setErrMsg(
        "Invalid Crendentials. If you are sure your credentials, the server might be having issues at the moment!"
      );
      setSuccess(false);
    }
  };

  return (
    <div className="login">
      <div className="left">
        <h1 className="leftHeading">
          Welcome<br></br>Back!
        </h1>
      </div>
      <div className="right">
        <div className="rightContainer">
          <h1 className="rightContainerHeading">Login</h1>
          <p>Welcome Back! Please login to your account.</p>
          <form action="" className="rightContainerForm">
            <label htmlFor="usernameInputField">Roll Number</label>
            <input
              type="text"
              name="username"
              id="username"
              className="textField"
              autoComplete="off"
              value={roll}
              onChange={(e) => {
                setRoll(e.target.value);
              }}
            />
            <label htmlFor="passwordInputField">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="textField"
              autoComplete="off"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="roleSelector">Select Role</label>
            <select
              name="selector"
              id="roleSelector"
              className="rightContainerFormSelect"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="">Select an Option</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="MIS Officer">MIS Officer</option>
              <option value="Academic Office">Academic Office</option>
            </select>
            <button className="rightContainerFormSubmit" onClick={handleSubmit}>
              Login
            </button>
          </form>
          <p>
            New User?&nbsp;
            <span className="rightContainerRegisterLink">Signup</span>
          </p>
          {errMsg ? (
            <p style={{ textAlign: "center", color: "red" }}>{errMsg}</p>
          ) : (
            <p></p>
          )}
          {success ? (
            <p style={{ textAlign: "center", color: "green" }}>
              Successfully Logged In!
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
