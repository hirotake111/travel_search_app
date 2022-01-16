import {
  IconButton,
  HStack,
  useColorMode,
  Link,
  Switch,
  Divider,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";

export default function ButtonList() {
  const { colorMode, setColorMode } = useColorMode();

  const handleClick = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <HStack display={{ base: "none", sm: "none", md: "flex" }}>
      {/** GitHub link */}
      <Link href="https://github.com/hirotake111" isExternal>
        <IconButton aria-label="GitHub" icon={<FaGithub />} />
      </Link>

      {/** dark mode button */}
      <SunIcon />
      <Switch
        size="lg"
        isChecked={colorMode === "dark" ? true : false}
        onChange={handleClick}
      />
      <MoonIcon />
    </HStack>
  );
}
