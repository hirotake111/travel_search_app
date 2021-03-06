import Image from "next/image";
import { Box, Button, Divider, Flex, Text, Link } from "@chakra-ui/react";
import { useAppSelector } from "../../redux/store";
import { Place } from "../../types";
import { usePlaceRefs } from "../../hooks/placeRefs";
import { useItemHover } from "../../hooks/itemHover";

import styles from "./List.module.css";

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
  const { refs } = usePlaceRefs();
  const { setHoveredPlace } = useItemHover();

  return (
    <>
      {places.length !== 0 ? (
        places.map((place, i) => (
          <Box
            key={i}
            ref={refs[i]}
            p={{ base: "0 8px", lg: "0 16px" }}
            onMouseEnter={() => setHoveredPlace(place.name)}
            aria-label="item"
          >
            {i > 0 && <Divider aria-label="divider" />}
            <Item place={place} />
            {/* <DummyItem /> */}
          </Box>
        ))
      ) : (
        <Box>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Box key={i} aria-label="dummy">
                {i > 0 && <Divider />}
                <DummyItem />
              </Box>
            ))}
        </Box>
      )}
    </>
  );
}

const Item = ({ place }: { place: Place }) => {
  return (
    <Flex p={{ base: "8px", lg: "16px" }} cursor="pointer">
      {/** image container */}
      <Box
        borderRadius={{ base: "8px", lg: "16px" }}
        minW={{ base: "75px", sm: "150px", md: "225px", lg: "300px" }}
        h={{ base: "50px", sm: "100px", md: "150px", lg: "200px" }}
        overflow="hidden"
        objectFit="cover"
      >
        <Image
          src={place.photo?.images?.large.url || images.hotel}
          width="300px"
          height="200px"
          alt="image"
          layout="responsive"
        />
      </Box>

      {/** details container */}
      <Box pl={{ base: "8px", sm: "8px", md: "8px", lg: "16px" }} w="100%">
        <Flex direction="column" justifyContent="space-between" h="100%">
          <Box>
            <Text fontSize={{ md: "md", lg: "lg" }}>{place.name}</Text>
            <Divider m={{ lg: "15px 0 " }} w="50%" />
            <Box>
              {place.awards?.length !== 0 &&
                place.awards?.slice(0, 3).map((award, i) => (
                  <div key={i}>
                    <Text
                      as="span"
                      m="2px"
                      p="3px 5px"
                      borderRadius="8px"
                      minW="0px"
                      fontSize={{ base: "10px", lg: "xs" }}
                      color={"white"}
                      bgColor={"gray.600"}
                      whiteSpace={"pre-wrap"}
                    >
                      {award.display_name}
                    </Text>
                    <br />
                  </div>
                ))}
            </Box>
            <Text
              fontSize={"10px"}
              color={"gray.400"}
              mt={{ base: "5px", lg: "10px" }}
            >
              {place.ranking}
            </Text>
          </Box>
          <Box>
            {place.web_url && (
              <Button size="xs" bgColor="gray.700">
                <Link href={place.web_url} isExternal>
                  GO TO WEBSITE
                </Link>
              </Button>
            )}
            <Flex justifyContent={"space-between"} alignItems="center">
              <Text>{place.rating ? `?????? ${place.rating}/5.0` : null}</Text>
              <Text fontSize="xl">{place.price || "-"}</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

const DummyItem = () => {
  return (
    <Flex p={{ base: "8px", lg: "16px" }} cursor="pointer">
      {/** image container */}
      <Box
        className={styles.emptyFields}
        borderRadius={{ base: "8px", lg: "16px" }}
        minW={{ base: "75px", sm: "150px", md: "225px", lg: "300px" }}
        h={{ base: "50px", sm: "100px", md: "150px", lg: "200px" }}
        overflow="hidden"
        objectFit="cover"
      ></Box>

      {/** details container */}
      <Box pl={{ base: "8px", sm: "8px", md: "8px", lg: "16px" }} w="100%">
        <Flex direction="column" justifyContent="space-between" h="100%">
          <Box>
            <Text
              className={styles.emptyFields}
              borderRadius="10px"
              w="50%"
              h="27px"
              fontSize={{ md: "md", lg: "lg" }}
            ></Text>
            <Divider m={{ lg: "15px 0 " }} w="50%" />
            <Box>
              <Text
                className={styles.emptyFields}
                m="2px"
                p="3px 5px"
                borderRadius="8px"
                w="30%"
                h="24px"
                fontSize={{ base: "10px", lg: "xs" }}
                color={"white"}
                whiteSpace={"pre-wrap"}
              ></Text>
            </Box>
            <Text
              fontSize={"10px"}
              className={styles.emptyFields}
              h="15px"
              w="15%"
              borderRadius="5px"
              mt={{ base: "5px", lg: "10px" }}
            ></Text>
          </Box>
          <Box>
            <Flex justifyContent={"space-between"} alignItems="center">
              <Text
                className={styles.emptyFields}
                h="24px"
                w="15%"
                borderRadius="10px"
              ></Text>
              <Text
                className={styles.emptyFields}
                fontSize="xl"
                h="30px"
                w="15%"
                borderRadius="10px"
              ></Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
