import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

import { useCoordinates } from "../../hooks/map";

export default function RightColumn() {
  const { coordinates, setCoordinates, setBoundaries, zoom } =
    useCoordinates(true);

  return (
    <Box h="100%" bgColor="ThreeDDarkShadow">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_APIKEY || "" }}
        // defaultCenter={coordinates}
        center={coordinates}
        zoom={zoom}
        // options={}
        onChange={(e) => {
          console.log("onChange");
          // console.log(e);
          // set coordinates and boundaries
          setCoordinates({ ...e.center });
          setBoundaries({ ...e.bounds });
        }}
        // onChildClick={}
      ></GoogleMapReact>
    </Box>
    // <div className={styles.rightColumn}>
    // </div>
  );
}
