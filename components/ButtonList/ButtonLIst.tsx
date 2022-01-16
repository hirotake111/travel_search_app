import { IconButton, HStack, useColorMode, Link } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

export default function ButtonList() {
  const { colorMode, setColorMode } = useColorMode();

  const handleClick = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <HStack display="flex">
      {/** dark mode button */}
      <Link href="https://github.com/hirotake111" isExternal>
        <IconButton aria-label="GitHub" icon={<FaGithub />} />
      </Link>
      <IconButton
        aria-label="Dark mode"
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        onClick={handleClick}
      />
    </HStack>
  );
}
