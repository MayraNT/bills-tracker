import React from "react";
import { Link } from "react-router-dom";

import BillsTable from "../BillsTable/BillsTable";
import Banks from "../Banks.js/Banks";

const Dashboard = () => {
  console.log("logged in user's email--", localStorage.getItem("user_email"));
  return (
    <div>
      <h2>Monthly Bills Dashboard</h2>
      <button
        onClick={() => {
          document.cookie = "loggedIn=";
          window.location.replace("/login");
        }}
      >
        Logout
      </button>
      <button>
        <Link to="/add">Add New Bill</Link>
      </button>
      <BillsTable />
      <Banks />
    </div>
  );
};

export default Dashboard;
