import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <p>Dashboard Component</p>
      <button>
        <Link to="/">Logout</Link>
      </button>
    </div>
  );
}
