import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styles from "./Searchbar.module.css";

export default function Searchbar() {
  return (
    <InputGroup width="50%">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input type="search" placeholder="Search Location..." />
    </InputGroup>
  );
}
