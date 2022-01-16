import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

export default function RightColumn() {
  const coordinates: GoogleMapReact.Coords = {
    lat: 51.5072,
    lng: 0.1276,
  };
  const zoom = 11;

  return (
    <Box h="100%">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_APIKEY || "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={zoom}
        // options={}
        // onChange={}
        // onChildClick={}
      ></GoogleMapReact>
    </Box>
    // <div className={styles.rightColumn}>
    // </div>
  );
}
