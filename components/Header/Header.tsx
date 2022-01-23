import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import Searchbar from "../search/Searchbar/Searchbar";
import ButtonList from "../ButtonList/ButtonLIst";

export default function Header() {
  return (
    <Flex
      h="100%"
      w="100%"
      p="0 40px"
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text
        flex="1"
        fontSize={{ base: "2xl", md: "2xl" }}
        pt={{ base: "16px", md: "0" }}
      >
        <Link href="/">Travel Advisor Search</Link>
      </Text>
      <Flex
        flex="1"
        w="100%"
        justifyContent="center"
        m={{ base: "16px", md: "0 16px" }}
      >
        <Searchbar />
      </Flex>
      <Flex flex="1" justifyContent="flex-end">
        <ButtonList />
      </Flex>
    </Flex>
  );
}
