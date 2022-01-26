import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/Header/Header";
import LeftColumn from "../components/LeftColumn/LeftColumn";
import RightColumn from "../components/RightColumn/RightColumn";
import { useAppSelector } from "../redux/store";

const Home: NextPage = () => {
  const { coordinates } = useAppSelector((s) => s.search);
  const mapHidden = coordinates?.lat === 0 && coordinates.lng === 0;

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <Box
        h={
          mapHidden
            ? "100vh"
            : { base: "128px", sm: "128px", md: "64px", lg: "64px" }
        }
        w="100%"
        transition="0.5s"
      >
        <Header />
      </Box>
      <Flex
        h={{
          base: "calc(100vh - 128px)",
          sm: "calc(100vh - 128px)",
          md: "calc(100vh - 64px)",
          lg: "calc(100vh - 64px)",
        }}
        flexDirection={{ base: "column-reverse", md: "row" }}
        transition="0.5s"
      >
        <Box flex={2} overflowY="hidden">
          <LeftColumn />
        </Box>
        <Box flex={1.2} display="block">
          <RightColumn />
        </Box>
      </Flex>
    </main>
  );
};

export default Home;
