import React from "react";
import { Link } from "react-router-dom";

import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.subContainer}>
        <div className={styles.titles}>
          <p>hello from</p>
          <h1>billy</h1>
          <p>your buddy for bills</p>
        </div>
        <div className={styles.buttons}>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Create a New Account</button>
          </Link>
        </div>
      </div>
      <div className={styles.tag}>
        <p>
          <strong>billy</strong> helps you keep track of your monthly bills so
          you never fall behind payments
        </p>
      </div>
    </div>
  );
}
