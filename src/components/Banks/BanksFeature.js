import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import URL from "../../api";
import styles from "./banksFeature.module.css";

export default function BanksFeature() {
  const [banks, setBanks] = useState([]);

  const fetchBanks = useCallback(async () => {
    const response = await axios(`${URL}/banks`);
    setBanks(response.data);
  }, []);

  useEffect(() => {
    fetchBanks();
  }, [fetchBanks]);

  return (
    <div className={styles.container}>
      <h4>
        <i class="fas fa-university"></i> Your Banks
      </h4>
      <ul className={styles.banksList}>
        {banks.map((bank) => (
          <li key={bank.id} className={styles.listItem}>
            <a href={bank.address} target="_blank" rel="noopener noreferrer">
              {bank.name}
            </a>
          </li>
        ))}
      </ul>
      <Link to="/banks">
        Search for banks nearby. <span>&#8594;</span>
      </Link>
    </div>
  );
}
