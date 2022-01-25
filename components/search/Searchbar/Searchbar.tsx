import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Autocomplete } from "@react-google-maps/api";
import { useSearchbar } from "../../../hooks/searchbar";

export default function Searchbar() {
  const { setAutocomplete, setCoordUsingAutocomplete } = useSearchbar();

  return (
    <Autocomplete
      onLoad={setAutocomplete}
      onPlaceChanged={setCoordUsingAutocomplete}
    >
      <InputGroup width={{ base: "80%", sm: "50%", md: "300px" }}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="search" placeholder="Search Location..." size="lg" />
      </InputGroup>
    </Autocomplete>
  );
}
