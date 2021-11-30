import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <p>Signup Component</p>
      <button>
        <Link to="/dashboard">Submit</Link>
      </button>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}