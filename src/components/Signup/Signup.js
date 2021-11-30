import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

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

    // THIS IS WHERE WE SEND DATA TO SERVER
    // NPM AXIOS IS AN OPTION (post request)

    // copied over from npm axios docs
    // URL to server goes in the quotes where /user is
    // add /user to end of URL or whatever works with mine/signup
    // URL - https://bills-api-l88zfqgi7-mayrant.vercel.app/api
    axios.post('/user', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(function (response) {
      console.log(response);
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
    <div>
      <p>Signup Component</p>
      <div className="form">
        <form onSubmit={(e) => handleSignup(e)}>
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
            type="text"
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
      {/* <button>
        <Link to="/dashboard">Submit</Link>
      </button>
      <button>
        <Link to="/">Home</Link>
      </button> */}
    </div>
  );
}
