import { Box } from "@chakra-ui/react";
import Searchbar from "../Searchbar/Searchbar";
import ButtonList from "../ButtonList/ButtonLIst";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <Box
      h="80px"
      p="0 40px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <div>logo</div>
      <Searchbar />
      <ButtonList />
    </Box>
  );
}
