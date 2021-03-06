import { Box, Flex, Spinner } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

import { useCoordinates } from "../../hooks/map";
import { useSelectedPlace } from "../../hooks/selectedPlace";
import { useAppSelector } from "../../redux/store";

export default function RightColumn() {
  const { coordinates, setBoundaries, zoom } = useCoordinates(false);
  const { setSelectedPlace, selectedPlace } = useSelectedPlace();

  const { places, hoveredPlace } = useAppSelector((state) => state.search);

  return (
    <Box h="100%" bgColor="ThreeDDarkShadow">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_APIKEY || "" }}
        center={coordinates}
        zoom={zoom}
        onChange={(e) => {
          console.log("onChange");
          setBoundaries({ ...e.bounds });
        }}
      >
        {places.map((p, i) => (
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
        ))}
      </GoogleMapReact>
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
