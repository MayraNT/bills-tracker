import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import GoogleMapReact from "google-map-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import RoomIcon from "@mui/icons-material/Room";

import URL from "../../api";
import styles from "./banksPage.module.css";

export default function BanksPage() {
  const [banks, setBanks] = useState([]);
  const [address, setAddress] = useState("");
  const [selection, setSelection] = useState("");
  const [coordinates, setcoordinates] = useState({
    lat: null,
    lng: null,
  });

  const defaultProps = {
    center: {
      lat: coordinates.lat || 30.249,
      lng: coordinates.lng || -97.749,
    },
  };

  const fetchBanks = useCallback(async () => {
    const response = await axios(`${URL}/banks`);
    setBanks(response.data);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setcoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
    fetchBanks();
  }, [fetchBanks]);

  const handleSelect = async (selection) => {
    const results = await geocodeByAddress(selection);
    const latLng = await getLatLng(results[0]);
    setcoordinates(latLng);
    setAddress(selection);
    setSelection(selection);
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Link to="/dashboard">
          <span>&#8592;</span> Back to Dashboard
        </Link>
        <h2 className={styles.appName}>
          <i class="fas fa-dollar-sign"></i> billy
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.searchSection}>
          <div className={styles.subContainer}>
            <h2>Search Banks Nearby</h2>
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
              searchOptions={address}
            >
              {({
                getInputProps,
                getSuggestionItemProps,
                suggestions,
                loading,
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Enter Bank Name",
                      style: { margin: "0" },
                    })}
                  />
                  <div>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion, i) => {
                      const style = {
                        backgroundColor: suggestion.active ? "#c5e1a5" : "#fff",
                        cursor: "pointer",
                      };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, { style })}
                          key={i}
                        >
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
          <p>Or click on a bank from your list to go directly to their website.</p>
          <ul className={styles.banksList}>
            {banks.map((bank) => (
              <li key={bank.id} className={styles.listItem}>
                <a
                  href={bank.address}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {bank.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.mapSection}>
          <p>You Selected: {selection}</p>
          <div style={{ height: "50vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyB7_DD2FTUoEzBvp-XEptM6A3i9Zq3PutQ",
              }}
              center={defaultProps.center}
              zoom={13}
              yesIWantToUseGoogleMapApiInternals
            >
              <RoomIcon
                lat={coordinates.lat}
                lng={coordinates.lng}
                style={{ fill: "#e53935" }}
                fontSize="large"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
}
