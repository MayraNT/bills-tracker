import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import URL from "../../api";
const FormData = require("form-data");
var qs = require("qs");

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

  // POST ATTEMPT WITH ASYNC/AWAIT
  // const handleSubmit = async (e) => {
  //   try {
  //     const response = await axios.post(`${URL}/bills`, {
  //       name: bill.name,
  //       due_day: bill.due_day,
  //       amount: bill.amount,
  //       fixed_amount: bill.fixed_amount,
  //     });
  //     console.log(response)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    // POST ATTEMPT WITH FORMDATA
    // const form = new FormData();
    // form.append("name", bill.name);
    // form.append("due_day", bill.due_day);
    // form.append("amount", bill.amount);
    // form.append("fixed_amount", null);

    // POST ATTEMPT WITH QS
    // let newBillInfo = {
    //   name: bill.name,
    //   due_day: bill.due_day,
    //   amount: bill.amount,
    //   fixed_amount: null,
    // };

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
        // window.location.replace("/dashboard");
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
            type="number"
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
          {/* <input
            type="text"
            name="fixed_amount"
            label="fixed_amount"
            placeholder="Is this bill the same amount every month?"
            value={bill.fixed_amount}
            onChange={(e) => handleChange(e)}
          ></input> */}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
