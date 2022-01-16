import { Box, Text } from "@chakra-ui/react";
import Searchbar from "../search/Searchbar/Searchbar";
import ButtonList from "../ButtonList/ButtonLIst";

import Link from "next/link";

export default function Header() {
  return (
    <Box
      h="80px"
      p="0 40px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize="2xl">
        <Link href="/">Travel Advisor Search</Link>
      </Text>
      <Searchbar />
      <ButtonList />
    </Box>
  );
}
