import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import URL from "../../api";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Banks() {
  const [banks, setBanks] = useState([]);

  const fetchBanks = useCallback(async () => {
    const response = await axios(`${URL}/banks`);
    setBanks(response.data);
  }, []);

  useEffect(() => {
    fetchBanks();
  }, [fetchBanks]);

  return (
    <div>
      <h3>Banks List</h3>
      <ul>
        {banks.map((bank) => (
          <li key={bank.id}>{bank.name}</li>
        ))}
      </ul>
    </div>
  );
}

