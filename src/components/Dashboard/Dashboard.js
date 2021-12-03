import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react-dom";
import axios from "axios";
import BillsTable from "../BillsTable/BillsTable";

const URL = "https://bills-api-l88zfqgi7-mayrant.vercel.app/api";
// const invocation = new XMLHttpRequest();

// attempt with class based component
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bills: [],
    };
  }

  componentDidMount() {
    // function getBills() {
    //   axios.get(`${URL}/bills`).then((res) => {
    //     const bills = res.data;
    //     console.log(bills);
    //     // this.setState({ bills });
    //   });
    // };

    // if (invocation) {
    //   invocation.open("GET", `${URL}/bills`, true);
    //   invocation.withCredentials = true;
    //   invocation.onreadystatechange = getBills();
    //   invocation.send();
    // }

    axios.get(`${URL}/bills`).then((res) => {
      const bills = res.data;
      console.log(bills);
      this.setState({ bills });
    });
    console.log(this.state.bills)
  }

  render() {
    return (
      <div>
        <h1>Dashboard Component</h1>
        <ul>
          {this.state.bills.map((bill, index) => {
            return <li>bill</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Dashboard;

// functional component not working due to node version???
// export default function Dashboard() {
//   const [bills, setBills] = useState([]);

//   useEffect(() => {
//     axios.get(`${URL}/bills`).then((res) => setBills(res.data));
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard Component</h1>
//       <ul>
//           {bills.map((bill, index) => {
//             return <li>{bill}</li>;
//           })}
//         </ul>
//     </div>
//   );
// }
