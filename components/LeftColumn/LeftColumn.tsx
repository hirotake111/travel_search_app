import { Box } from "@chakra-ui/react";
import Filter from "../search/Filter/Filter";
import styles from "./LeftColumn.module.css";

export default function LeftColumn() {
  return (
    <Box display="flex" flexDirection="column">
      <Filter />
      <span>items</span>
    </Box>
  );
}
