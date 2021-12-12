import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import URL from "../../api";
import styles from "./login.module.css";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

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
        localStorage.setItem("user_email", user.email);
        document.cookie = "loggedIn=true;";
        window.location.replace("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
        setErrorMsg("Login failed. Try again or create a new account.");
      });

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.main}>
      <Link to="/">
        <span>&#8592;</span> Back to Home
      </Link>
      <div className={styles.container}>
        <p>
          Login to your <strong>billy</strong> Account
        </p>
        <div>
          <form onSubmit={(e) => handleLogin(e)} className={styles.loginForm}>
            <input
              required
              type="email"
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
            {errorMsg ? <p className={styles.error}>{errorMsg}</p> : null}
          </form>
        </div>
        <p>
          Don't have an account yet?{" "}
          <Link to="/signup">
            Signup <span>&#8594;</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
