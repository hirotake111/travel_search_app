import { Box, Flex, Spinner } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { useGoogleMaps } from "../../hooks/googleMaps";

import { useCoordinates } from "../../hooks/map";
import { useSelectedPlace } from "../../hooks/selectedPlace";
import { useAppSelector } from "../../redux/store";

export default function RightColumn() {
  const { coordinates, setCoordinates, setBoundaries, zoom } =
    useCoordinates(true);
  const { setSelectedPlace } = useSelectedPlace();
  const { setGoogleMapsLoadedStatus, googleMapsLoaded } = useGoogleMaps();

  const { places, hoveredPlace, selectedPlace } = useAppSelector(
    (state) => state.search
  );

  return (
    <Box h="100%" bgColor="ThreeDDarkShadow">
      {coordinates ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_APIKEY || "" }}
          center={coordinates}
          zoom={zoom}
          // options={}
          onChange={(e) => {
            console.log("onChange");
            // set coordinates and boundaries
            setCoordinates({ ...e.center });
            setBoundaries({ ...e.bounds });
          }}
          onGoogleApiLoaded={setGoogleMapsLoadedStatus}
        >
          {places.map((p, i) => {
            return (
              <MapChild
                key={i}
                id={p.name}
                lat={Number(p.latitude)}
                lng={Number(p.longitude)}
                onClick={() => setSelectedPlace(p.name)}
                selected={p.name == hoveredPlace || p.name === selectedPlace}
              >
                {p.name}
              </MapChild>
            );
          })}
        </GoogleMapReact>
      ) : (
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <Spinner size="xl" />
        </Flex>
      )}
    </Box>
  );
}

interface Props {
  [key: string]: any;
  id: string;
  onClick: () => void;
  selected: boolean;
}

const MapChild = (props: Props) => {
  return (
    <Box
      {...props}
      p="5px"
      minW="80px"
      maxW="100px"
      borderRadius="15px"
      whiteSpace="nowrap"
      textOverflow="ellipsis"
      overflow="hidden"
      bgColor={props.selected ? "black" : "white"}
      color={props.selected ? "white" : "black"}
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
      transition="0.1s"
      onClick={props.onClick}
    >
      {props.children}
    </Box>
  );
};
