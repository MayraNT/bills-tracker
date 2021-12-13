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
  IconButton,
} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import URL from "../../api";
import styles from "./billsTable.module.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function BillsTable() {
  const [bills, setBills] = useState([]);
  const [actions, setActions] = useState(false);

  const fetchBills = useCallback(async () => {
    const response = await axios(`${URL}/bills`);
    setBills(response.data);
  }, []);

  useEffect(() => {
    fetchBills();
  }, [fetchBills]);

  const deleteBill = (id) => {
    console.log("this bill's id for DELETE:", id);
    axios
      .delete(`${URL}/bills/${id}`)
      .then((response) => {
        console.log(response);
        const del = bills.filter((bill) => id !== bill.id);
        setBills(del);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Paid</TableCell>
              <TableCell align="left">Due</TableCell>
              <TableCell>Bill</TableCell>
              <TableCell>Amount</TableCell>
              {actions === true && <TableCell align="center">Delete</TableCell>}
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bills.map((bill) => (
              <TableRow
                key={bill.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <Checkbox {...label} style={{ color: 'secondary'}} />
                </TableCell>
                <TableCell align="left">{bill.due_day}</TableCell>
                <TableCell component="th" scope="row">
                  {bill.name}
                </TableCell>
                <TableCell>{`$${bill.amount}`}</TableCell>
                {actions === true && (
                  <TableCell className={styles.delete}>
                    <IconButton
                      onClick={() => deleteBill(bill.id)}
                      className={styles.delete}
                      aria-label="delete"
                    >
                      <DeleteForeverIcon className={styles.delete}/>
                    </IconButton>
                  </TableCell>
                )}
                <TableCell align="center">
                  <button
                    className={styles.actionsBtn}
                    onClick={() => setActions(!actions)}
                  >
                    <span style={{ color: "#8FBC8F" }}><i class="fas fa-ellipsis-v"></i></span>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
