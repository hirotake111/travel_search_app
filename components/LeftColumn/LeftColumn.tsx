import { Flex } from "@chakra-ui/react";
import List from "../List/List";
import Filter from "../search/Filter/Filter";

export default function LeftColumn() {
  return (
    <Flex direction="column">
      <Filter />
      <div>
        <List />
      </div>
    </Flex>
  );
}
