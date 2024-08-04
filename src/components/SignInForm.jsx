import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";


function SignInForm() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { setIsLogged } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSuccessfulLogin = (username) => {
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("username", username);
    alert("Successfully logged in");
    // navigate("/home");
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((loginSuccess) => {
        if (loginSuccess) {
          // setIsLogged(true);
          handleSuccessfulLogin(state.username);
        } else {
          alert("Invalid user");
          // navigate("/errorpage");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });

    // Clear the state
    setState({
      username: "",
      password: "",
    });
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <br />
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
