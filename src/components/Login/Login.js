import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import URL from "../../api";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const logUser = { ...user };
    logUser[e.target.name] = e.target.value;
    setUser(logUser);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(`${URL}/login`, {
        email: user.email,
        password: user.password,
      })
      .then(function (response) {
        console.log(response);
        document.cookie = "loggedIn=true;";
        window.location.replace("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <p>Login Component</p>
      <div className="form">
        <form onSubmit={(e) => handleLogin(e)}>
          <input
            required
            type="text"
            name="email"
            label="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            required
            type="password"
            name="password"
            label="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => handleChange(e)}
          ></input>
          <button type="submit">Login</button>
        </form>
      </div>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}
