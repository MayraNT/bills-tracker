import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [] = useState();
  return (
    <div>
      <p>Login Component</p>
      <div className="form">
        <form>
          <input type="text"></input>
          <button type="submit"></button>
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