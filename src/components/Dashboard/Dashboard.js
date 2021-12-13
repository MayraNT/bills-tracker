import React from "react";
import { Link } from "react-router-dom";

import BillsTable from "../BillsTable/BillsTable";
import BanksFeature from "../Banks/BanksFeature";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  console.log("logged in user's email--", localStorage.getItem("user_email"));

  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = months[date.getMonth()];
  console.log(currentMonth);

  return (
    <div className={styles.container}>
      <div className={styles.sideDiv}>
        <h3 className={styles.greeting}>
          Hi, {localStorage.getItem("user_email")}!
        </h3>
        <h4 className={styles.greeting2}>
          <i class="far fa-grin"></i> Welcome to your {currentMonth} Dashboard.
        </h4>
        <div className={styles.btnsContainer}>
          <button className={styles.dashBtn}
            onClick={() => {
              document.cookie = "loggedIn=";
              window.location.replace("/");
            }}
          ><i class="fas fa-sign-out-alt"></i>
            Logout 
          </button>
          <Link to="/add">
            <button className={styles.dashBtn}><i class="fas fa-plus-circle"></i> Add New Bill</button>
          </Link>
        </div>
        <BanksFeature />
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
