import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Hello Bills Tracker App!</h1>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <button>
        <Link to="/signup">Sign Up</Link>
      </button>
    </div>
  );
}
