import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import GoogleMapReact from "google-map-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import RoomIcon from "@mui/icons-material/Room";

import URL from "../../api";
import styles from "./banksPage.module.css";

// export default function BanksPage() {
//   const [banks, setBanks] = useState([]);
//   const [lat, setLat] = useState(0);
//   const [lng, setLng] = useState(0);

//   const defaultProps = {
//     center: {
//       lat: lat || 30.249,
//       lng: lng || -97.749,
//     },
//   };

//   const fetchBanks = useCallback(async () => {
//     const response = await axios(`${URL}/banks`);
//     setBanks(response.data);
//   }, []);

//   useEffect(() => {
//     fetchBanks();
//   }, [fetchBanks]);

//   const handleApiLoaded = (map, maps) => {
//     const geocoder = new window.google.maps.Geocoder();
//     geocoder.geocode().then((res) => {
//       // full response results
//       console.log("results:", res.results);

//       // formatted address from results
//       console.log("formatted address:", res.results[0].formatted_address);

//       // geometry (lat & lng)
//       setLat(res.results[0].geometry.location.lat());
//       setLng(res.results[0].geometry.location.lng());
//     });
//   };

//   return (
//     <div>
//       <Link to="/dashboard">
//         <span>&#8592;</span> Back to Dashboard
//       </Link>
//       <h4>
//         <i class="fas fa-university"></i> Your Banks
//       </h4>
//       <ul>
//         {banks.map((bank) => (
//           <li key={bank.id}>{bank.name}</li>
//         ))}
//       </ul>
//       <div style={{ height: "50vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyCqxFMhz3e7AN8RcLM_03Igc7sMqe_qnCY" }}
//           center={defaultProps.center}
//           zoom={14}
//           yesIWantToUseGoogleMapApiInternals
//           onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//         >
//           <RoomIcon
//             lat={lat || defaultProps.center.lat}
//             lng={lng || defaultProps.center.lng}
//             color="secondary"
//           />
//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// }

// KEY = AIzaSyB7_DD2FTUoEzBvp-XEptM6A3i9Zq3PutQ

export default function BanksPage() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [selection, setSelection] = useState("");

  const defaultProps = {
    center: {
      lat: coordinates.lat || 30.249,
      lng: coordinates.lng || -97.749,
    },
  };

  const handleSelect = async (selection) => {
    const results = await geocodeByAddress(selection);
    const latLng = await getLatLng(results[0]);
    setCoordinates(latLng);
    setAddress(selection);
    setSelection(selection);
  };

  return (
    <div className={styles.main}>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={address}
      >
        {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "Search Banks" })} />
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
      <p>Your Selection: {selection}</p>
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB7_DD2FTUoEzBvp-XEptM6A3i9Zq3PutQ" }}
          center={defaultProps.center}
          zoom={13}
          yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <RoomIcon
            lat={coordinates.lat || defaultProps.center.lat}
            lng={coordinates.lng || defaultProps.center.lng}
            style={{ fill: "#e53935" }}
            fontSize="large"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}
