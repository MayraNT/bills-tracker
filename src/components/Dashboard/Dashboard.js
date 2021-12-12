import React from "react";
import { Link } from "react-router-dom";

import BillsTable from "../BillsTable/BillsTable";
import Banks from "../Banks.js/Banks";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  console.log("logged in user's email--", localStorage.getItem("user_email"));
  return (
    <div className={styles.container}>
      <div className={styles.sideDiv}>
        <h3>
          Hi, {localStorage.getItem("user_email")}!
          <br />
          Welcome to your Dashboard.
        </h3>
        <Link to="/add">
          <button>Add New Bill</button>
        </Link>
        <Banks />
        <button
          onClick={() => {
            document.cookie = "loggedIn=";
            window.location.replace("/");
          }}
        >
          Logout <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
      <div className={styles.mainDiv}>
        <h2 className={styles.appName}>
          <i class="fas fa-dollar-sign"></i> billy
        </h2>
        <BillsTable />
      </div>
    </div>
  );
};

export default Dashboard;
