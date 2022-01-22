import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/Header/Header";
import LeftColumn from "../components/LeftColumn/LeftColumn";
import RightColumn from "../components/RightColumn/RightColumn";

const Home: NextPage = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box h={{ base: "128px", sm: "128px", md: "64px", lg: "64px" }} w="100%">
        <Header />
      </Box>
      <Flex
        h={{
          base: "calc(100vh - 128px)",
          sm: "calc(100vh - 128px)",
          md: "calc(100vh - 64px)",
          lg: "calc(100vh - 64px)",
        }}
      >
        <Box flex={2}>
          <LeftColumn />
        </Box>
        <Box flex={1.2} display={{ base: "none", sm: "none", md: "block" }}>
          <RightColumn />
        </Box>
      </Flex>
    </main>
  );
};

export default Home;
