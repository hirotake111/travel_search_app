import { Box, Flex } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

import { useCoordinates } from "../../hooks/map";
import { useAppSelector } from "../../redux/store";

export default function RightColumn() {
  const { coordinates, setCoordinates, setBoundaries, zoom } =
    useCoordinates(true);

  const { places } = useAppSelector((state) => state.search);

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
          // set coordinates and boundaries
          setCoordinates({ ...e.center });
          setBoundaries({ ...e.bounds });
        }}
        // onChildClick={(e) => {
        //   console.log("child clicked!", e);
        // }}
      >
        {places.map((p, i) => {
          return (
            <MapChild
              key={i}
              lat={Number(p.latitude)}
              lng={Number(p.longitude)}
            >
              {p.name}
            </MapChild>
          );
        })}
      </GoogleMapReact>
    </Box>
    // <div className={styles.rightColumn}>
    // </div>
  );
}

const MapChild = (props: { [key: string]: any }) => {
  return (
    <Box
      {...props}
      // position="absolute"
      // display="flex"
      p="5px"
      minW="80px"
      maxW="100px"
      borderRadius="15px"
      whiteSpace="nowrap"
      textOverflow="ellipsis"
      overflow="hidden"
      bgColor="white"
      border="1px solid #eeeeee"
      boxShadow="2px 2px 5.3px rgba(0, 0, 0, 0.028),
            6.7px 6.7px 17.9px rgba(0, 0, 0, 0.042),
            30px 30px 80px rgba(0, 0, 0, 0.07)"
      cursor="pointer"
      fontWeight="500"
      _hover={{
        fontSize: "12px",
        minWidth: "85px",
        maxWidth: "105px",
      }}
      transition="0.2s"
      onClick={() => console.log("boon!")}
    >
      {props.children}
    </Box>
  );
};
