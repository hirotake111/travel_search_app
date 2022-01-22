import Image from "next/image";
import { Box, Divider, Flex } from "@chakra-ui/react";
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
        <Box key={i} p="0 16px">
          {i > 0 && <Divider />}
          <Flex p="16px">
            <Box w="300px" h="200px" borderRadius="16px" overflow="hidden">
              <Image
                src={place.photo?.images?.large.url || images.hotel}
                width="300px"
                height="200px"
              />
            </Box>
            <Box>
              <p>{place.name || "N/A"}</p>
              <p>{place.price || "-"}</p>
              <p>{place.price_level || "-"}</p>
              <p>
                {place.rating ? `Customer's Rate: ${place.rating}/5.0` : "-"}
              </p>
              {place.awards?.length !== 0 &&
                place.awards?.map((award) => (
                  <p style={{ color: "red" }}>{award.display_name}</p>
                ))}
              <p>{place.ranking}</p>
            </Box>
          </Flex>
        </Box>
      ))}
    </>
  );
}
