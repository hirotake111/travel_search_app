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
      <Header />
      <Flex display="flex" height="100%">
        <Box flex={2}>
          <LeftColumn />
        </Box>
        <Box flex={1} display={{ base: "none", sm: "none", md: "block" }}>
          <RightColumn />
        </Box>
      </Flex>
    </main>
  );
};

export default Home;
