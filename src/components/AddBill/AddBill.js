import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import URL from "../../api";
import styles from "./addBill.module.css";

export default function AddBill() {
  const [bill, setBill] = useState({
    name: "",
    due_day: "",
    amount: "",
    fixed_amount: "",
    user_id: "",
  });

  const handleChange = (e) => {
    const newBill = { ...bill };
    newBill[e.target.name] = e.target.value;
    setBill(newBill);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${URL}/bills`, {
        name: bill.name,
        due_day: bill.due_day,
        amount: bill.amount,
        fixed_amount: null,
        user_id: null,
      })
      .then((response) => {
        console.log(response);
        window.location.replace("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });

    setBill({
      name: "",
      due_day: "",
      amount: "",
      fixed_amount: "",
      user_id: "",
    });
  };

  return (
    <div>
      <div className={styles.header}>
        <Link to="/dashboard">
          <span>&#8592;</span> Back to Dashboard
        </Link>
        <h2 className={styles.appName}>
            <i class="fas fa-dollar-sign"></i> billy
        </h2>
      </div>
      <div className={styles.main}>
        <h2>Add a New Monthly Bill</h2>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.addForm}>
          <p>Name your bill.</p>
          <input
            required
            type="text"
            name="name"
            label="name"
            placeholder="Name"
            value={bill.name}
            onChange={(e) => handleChange(e)}
          ></input>
          <p>What day of the month is it due?</p>
          <input
            required
            type="number"
            name="due_day"
            label="due_day"
            placeholder="Select a number"
            value={bill.due_day}
            onChange={(e) => handleChange(e)}
          ></input>
          <p>How much is it? Enter numbers and decimals only.</p>
          <input
            required
            type="text"
            name="amount"
            label="amount"
            placeholder="ex. 24.75"
            value={bill.amount}
            onChange={(e) => handleChange(e)}
          ></input>
          {/* <input
            type="text"
            name="fixed_amount"
            label="fixed_amount"
            placeholder="Is this bill the same amount every month?"
            value={bill.fixed_amount}
            onChange={(e) => handleChange(e)}
          ></input> */}
          <br/>
          <div className={styles.buttonDiv}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
