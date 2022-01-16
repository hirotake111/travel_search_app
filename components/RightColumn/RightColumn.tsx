import GoogleMapReact from "google-map-react";

import styles from "./RightColumn.module.css";

export default function RightColumn() {
  const coordinates: GoogleMapReact.Coords = {
    lat: 51.5072,
    lng: 0.1276,
  };
  const zoom = 11;

  return (
    <div className={styles.rightColumn}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_APIKEY || "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={zoom}
        // options={}
        // onChange={}
        // onChildClick={}
      ></GoogleMapReact>
    </div>
  );
}
