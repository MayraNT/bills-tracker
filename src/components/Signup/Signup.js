import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import URL from "../../api";
import styles from "./signup.module.css";

export default function Signup() {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const newUserInfo = { ...newUser };
    newUserInfo[e.target.name] = e.target.value;
    setNewUser(newUserInfo);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post(`${URL}/signup`, {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
      })
      .then(function (response) {
        console.log(response);
        window.location.replace("/login");
      })
      .catch(function (error) {
        console.log(error);
      });

    setNewUser({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.spacerDiv}></div>
      <Link to="/">
        <span>&#8592;</span> Back to Home
      </Link>
      <div className={styles.container}>
        <p>
          Create a New <strong>billy</strong> Account
        </p>
        <div>
          <form onSubmit={(e) => handleSignup(e)} className={styles.signupForm}>
            <input
              required
              type="text"
              name="first_name"
              label="first_name"
              placeholder="First Name"
              value={newUser.first_name}
              onChange={(e) => handleChange(e)}
            ></input>
            <input
              required
              type="text"
              name="last_name"
              label="last_name"
              placeholder="Last Name"
              value={newUser.last_name}
              onChange={(e) => handleChange(e)}
            ></input>
            <input
              required
              type="email"
              name="email"
              label="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => handleChange(e)}
            ></input>
            <input
              required
              type="password"
              name="password"
              label="password"
              placeholder="Password"
              value={newUser.password}
              onChange={(e) => handleChange(e)}
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            Login <span>&#8594;</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
