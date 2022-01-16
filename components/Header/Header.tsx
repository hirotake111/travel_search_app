import { Box, Text } from "@chakra-ui/react";
import Searchbar from "../search/Searchbar/Searchbar";
import ButtonList from "../ButtonList/ButtonLIst";

import Link from "next/link";

export default function Header() {
  return (
    <Box
      h={{ sm: "120px", md: "80px" }}
      p="12px 40px"
      display="flex"
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize={{ base: "2xl", md: "md", lg: "2xl" }}>
        <Link href="/">Travel Advisor Search</Link>
      </Text>
      <Searchbar />
      <ButtonList />
    </Box>
  );
}
