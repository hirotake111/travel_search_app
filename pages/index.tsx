import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/Header/Header";
import LeftColumn from "../components/LeftColumn/LeftColumn";
import RightColumn from "../components/RightColumn/RightColumn";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Box display="flex" height="100%">
        <div className={styles.main__left}>
          <LeftColumn />
        </div>
        <div className={styles.main__right}>
          <RightColumn />
        </div>
      </Box>
    </main>
  );
};

export default Home;
