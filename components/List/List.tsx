import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { useAppSelector } from "../../redux/store";

const defaultHotelImageURL =
  "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdGVsfGVufDB8fDB8fA==&auto=format&fit=crop&w=1200&q=60";
export default function List() {
  const { places } = useAppSelector((state) => state.search);

  return (
    <div style={{ overflow: "scroll" }}>
      {places.map((place, i) => (
        <Flex key={i}>
          <Image
            src={place.photo?.images?.large.url || defaultHotelImageURL}
            width="150px"
            height="150px"
          />
          <Box>description</Box>
        </Flex>
      ))}
    </div>
  );
}
