import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import BillsTable from "../BillsTable/BillsTable";
import AddBill from "../AddBill/AddBill";

const URL = "https://bills-api-l88zfqgi7-mayrant.vercel.app/api";

const Dashboard = () => {
  const [bills, setBills] = useState([]);

  const fetchBills = useCallback(async () => {
    const response = await axios(`${URL}/bills`);
    setBills(response.data);
  }, []);

  useEffect(() => {
    fetchBills();
  }, [fetchBills]);

  console.log("BILLS list", bills);

  return (
    <div>
      <h1>Dashboard Component</h1>
      <button
        onClick={() => {
          document.cookie = "loggedIn=";
          window.location.replace("/login");
        }}
      >
        Logout
      </button>
      <BillsTable bills={bills} />
      <AddBill />
    </div>
  );
};

export default Dashboard;
