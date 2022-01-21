import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { useAppSelector } from "../../redux/store";

const images = {
  hotel:
    "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdGVsfGVufDB8fDB8fA==&auto=format&fit=crop&w=1200&q=60",
  restaurant:
    "https://images.unsplash.com/photo-1514536338919-cd001f6dc6b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA==&auto=format&fit=crop&w=900&q=60",
  attraction:
    "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
};

export default function List() {
  const { places } = useAppSelector((state) => state.search);

  return (
    <>
      {places.map((place, i) => (
        <Flex key={i}>
          <Image
            src={place.photo?.images?.large.url || images.hotel}
            width="150px"
            height="150px"
          />
          <Box>description</Box>
        </Flex>
      ))}
    </>
  );
}
