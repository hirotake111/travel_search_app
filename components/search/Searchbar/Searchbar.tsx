import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Searchbar() {
  return (
    <InputGroup width={{ base: "80%", sm: "50%", md: "300px" }}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input type="search" placeholder="Search Location..." />
    </InputGroup>
  );
}