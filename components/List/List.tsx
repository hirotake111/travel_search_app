import { Box } from "@chakra-ui/react";
import { useAppSelector } from "../../redux/store";

export default function List() {
  const { places } = useAppSelector((state) => state.search);

  return (
    <Box>
      <div>
        {places.map((place, i) => (
          <div key={i}>{place.name}</div>
        ))}
      </div>
    </Box>
  );
}
