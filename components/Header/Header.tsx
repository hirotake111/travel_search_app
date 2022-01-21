import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import Searchbar from "../search/Searchbar/Searchbar";
import ButtonList from "../ButtonList/ButtonLIst";

export default function Header() {
  return (
    <Flex
      p="12px 40px"
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize={{ base: "2xl", md: "md", lg: "2xl" }}>
        <Link href="/">Travel Advisor Search</Link>
      </Text>
      <Searchbar />
      <ButtonList />
    </Flex>
  );
}
