import { useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import axios from "axios";

export default function List() {
  // useEffect(() => {
  //   (async () => {
  //     const response = await axios.get("/api/hello");
  //     console.log(response.data);
  //   })();
  // }, []);
  const handleClick = async () => {
    const response = await axios.get("/api/search?city=new%20york");
    console.log(response.data);
  };

  return (
    <Box>
      <Item />
      <Button onClick={handleClick}>push</Button>
    </Box>
  );
}

const Item = () => {
  return <span>item</span>;
};
