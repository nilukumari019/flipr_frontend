import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace this part with your server-side authentication logic
    const { username, password } = formData;
    if (username === "admin" && password === "password") {
      setErrorMessage("Login successful!");
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="psw">
          <div className="check">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <Link to="#">Forget Password</Link>
        </div>

        <div className="box">
          <button type="submit">Login</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
      {errorMessage && <p id="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Login;
