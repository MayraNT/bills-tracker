import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";

import URL from "../../api";
import styles from "./billsTable.module.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function BillsTable() {
  const [bills, setBills] = useState([]);

  const fetchBills = useCallback(async () => {
    const response = await axios(`${URL}/bills`);
    setBills(response.data);
  }, []);

  useEffect(() => {
    fetchBills();
  }, [fetchBills]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Due</TableCell>
              <TableCell>Bill</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="center">Paid</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bills.map((bill) => (
              <TableRow
                key={bill.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{bill.due_day}</TableCell>
                <TableCell component="th" scope="row">
                  {bill.name}
                </TableCell>
                <TableCell align="left">{`$${bill.amount}`}</TableCell>
                <TableCell align="center">
                  <Checkbox {...label} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
