import { Box } from "@chakra-ui/react";
import { useAppSelector } from "../../redux/store";

export default function List() {
  const { places } = useAppSelector((state) => state.search);

  return (
    <Box>
      <div>
        {places.map((place) => (
          <div key={place.location_id || place.name || place.listing_key}>
            {place.name}
          </div>
        ))}
      </div>
    </Box>
  );
}
