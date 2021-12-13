import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import URL from "../../api";
import styles from "./addBank.module.css";

export default function AddBank() {
  const [bank, setBank] = useState({
    name: "",
    address: "",
    user_id: "",
  });

  const handleChange = (e) => {
    const newBank = { ...bank };
    newBank[e.target.name] = e.target.value;
    setBank(newBank);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${URL}/banks`, {
        name: bank.name,
        address: bank.address,
        user_id: null,
      })
      .then((response) => {
        console.log(response);
        window.location.replace("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });

    setBank({
      name: "",
      address: "",
      user_id: "",
    });
  };

  return (
    <div>
      <div className={styles.spacerDiv}></div>
      <div className={styles.header}>
        <Link to="/dashboard">
          <span>&#8592;</span> Back to Dashboard
        </Link>
        <h2 className={styles.appName}>
          <i class="fas fa-dollar-sign"></i> billy
        </h2>
      </div>
      <div className={styles.main}>
        <h2>Add a Bank to your Favorites List</h2>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.addForm}>
          <p>Bank Name</p>
          <input
            required
            type="text"
            name="name"
            label="name"
            placeholder="Name"
            value={bank.name}
            onChange={(e) => handleChange(e)}
          ></input>
          <p>What is the bank's website?</p>
          <sub>
            Make sure it begins with <i>http</i> and ends with <i>.com</i>.
          </sub>
          <br />
          <input
            required
            type="text"
            name="address"
            label="address"
            placeholder="ex. https://www.bankname.com/"
            className={styles.addressInput}
            value={bank.address}
            onChange={(e) => handleChange(e)}
          ></input>
          <br />
          <div className={styles.buttonDiv}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
