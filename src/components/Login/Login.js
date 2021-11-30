import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

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

    // THIS IS WHERE WE SEND DATA TO SERVER
    // NPM AXIOS IS AN OPTION (post request)

    // copied over from npm axios docs
    // URL to server goes in the quotes where /user is
    // add /user to end of URL or whatever works with mine/login
    // URL - https://bills-api-l88zfqgi7-mayrant.vercel.app/api
    axios.post('/user', {
      email: user.email,
      password: user.password
    })
    .then(function (response) {
      console.log(response);
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
      {/* <button>
        <Link to="/dashboard">Submit</Link>
      </button>
      <button>
        <Link to="/">Home</Link>
      </button> */}
    </div>
  );
}
