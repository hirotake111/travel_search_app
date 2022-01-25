import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/Header/Header";
import LeftColumn from "../components/LeftColumn/LeftColumn";
import RightColumn from "../components/RightColumn/RightColumn";
import { useAppSelector } from "../redux/store";

const Home: NextPage = () => {
  const { coordinates } = useAppSelector((s) => s.search);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        h={
          coordinates
            ? { base: "128px", sm: "128px", md: "64px", lg: "64px" }
            : "100vh"
        }
        w="100%"
        transition="0.5s"
      >
        <Header />
      </Box>
      <Flex
        h={
          coordinates
            ? {
                base: "calc(100vh - 128px)",
                sm: "calc(100vh - 128px)",
                md: "calc(100vh - 64px)",
                lg: "calc(100vh - 64px)",
              }
            : "0px"
        }
        transition="0.5s"
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
