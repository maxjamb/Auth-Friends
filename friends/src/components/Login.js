import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

const initialUser = {
  username: "admin",
  password: "1234"
};

const Login = props => {
  const [user, setUser] = useState(initialUser);

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.password);
  };
  return (
    <div className="lg-container">
      <form className="lg-form" onSubmit={event => handleSubmit(event)}>
        <h4>LOGIN</h4>
        <div>
          <input
            required
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={event => handleChange(event)}
            className="lg-form-input"
          />
        </div>
        <div>
          <input
            required
            name="password"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={event => handleChange(event)}
            className="lg-form-input"
          />
        </div>

        <div>
          <button type="submit" className="lg-form-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
