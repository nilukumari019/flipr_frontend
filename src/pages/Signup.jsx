import React, { useState } from "react";

import "./Signup.css";
const Signup = () => {
    
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
const [showPassword,setShowPassword]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log("Form submitted:", formData);
  };
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div>
      <h1>Sign Up</h1>
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

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password: 
</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <h3>Yes, send me news, recommendations and offers<br></br>I accept the terms of service and privacy policy
        <input type="checkbox" id="myCheckbox"/>
<label for="myCheckbox">Checkbox</label>  </h3> 
<button type="button" onClick={handleTogglePassword}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
        <button type="submit">Sign Up</button>
      </form>
    </div>

  );
};

export default Signup;
