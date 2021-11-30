import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Home Component</p>
      <p>Hello Bills Tracker App!</p>
      {/* Login from Home Page. Button to sign up if they don't have an account. */}
      <button>
        <Link to="/login">Login</Link>
      </button>
      {/* Button to Sign Up will take you to page to enter info?? */}
      <button>
        <Link to="/signup">Sign Up</Link>
      </button>
    </div>
  );
}
