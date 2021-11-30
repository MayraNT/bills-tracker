import React from "react";
import { Link } from "react-router-dom";

import BillsTable from "../BillsTable/BillsTable";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Component</h1>
      <BillsTable />
      <button>
        <Link to="/">Logout</Link>
      </button>
    </div>
  );
}
