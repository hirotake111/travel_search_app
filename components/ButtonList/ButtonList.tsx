import {
  IconButton,
  HStack,
  useColorMode,
  Link,
  Switch,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

export default function ButtonList() {
  const { colorMode, setColorMode } = useColorMode();

  const handleClick = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <HStack display={{ base: "none", sm: "none", md: "flex" }}>
      {/** GitHub link */}
      <Link href="https://github.com/hirotake111/travel_search_app" isExternal>
        <IconButton aria-label="GitHub" icon={<FaGithub />} />
      </Link>

      {/** dark mode button */}
      <SunIcon />
      <Switch
        aria-label="dark mode switch"
        size="lg"
        isChecked={colorMode === "dark"}
        onChange={handleClick}
      />
      <MoonIcon />
    </HStack>
  );
}
