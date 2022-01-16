import { Box, IconButton, Stack, Switch, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

export default function ButtonList() {
  const { colorMode, setColorMode } = useColorMode();

  const handleClick = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  useEffect(() => {
    console.log("color:", colorMode);
  }, [colorMode]);

  return (
    <Stack>
      <IconButton
        aria-label="Dark mode"
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        onClick={handleClick}
      />
    </Stack>
  );
}
