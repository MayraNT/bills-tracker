import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import URL from "../../api";

export default function AddBill() {
  const [bill, setBill] = useState({
    name: "",
    due_day: "",
    amount: "",
    fixed_amount: "",
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
        fixed_amount: bill.fixed_amount,
      })
      .then(function (response) {
        console.log(response);
        // window.location.replace("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });

    setBill({
      name: "",
      due_day: "",
      amount: "",
      fixed_amount: "",
    });
  };

  return (
    <div>
      <h2>Add a New Monthly Bill</h2>
      <button>
        <Link to="/dashboard">Back to Dashboard</Link>
      </button>
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            required
            type="text"
            name="name"
            label="name"
            placeholder="Name"
            value={bill.name}
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            required
            type="text"
            name="due_day"
            label="due_day"
            placeholder="What day of the month is this bill due?"
            value={bill.due_day}
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            required
            type="text"
            name="amount"
            label="amount"
            placeholder="Amount"
            value={bill.amount}
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            type="text"
            name="fixed_amount"
            label="fixed_amount"
            placeholder="Is this bill the same amount every month?"
            value={bill.fixed_amount}
            onChange={(e) => handleChange(e)}
          ></input>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
