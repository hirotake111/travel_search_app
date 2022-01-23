import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

import { useSearchType } from "../../../hooks/searchType";

export default function Filter() {
  const { searchType, setSearchType } = useSearchType();

  return (
    <Accordion allowToggle defaultIndex={0}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Filter
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box paddingLeft="16px" display="flex">
            <span style={{ paddingRight: "12px" }}>Facility:</span>
            <RadioGroup value={searchType} onChange={setSearchType}>
              <Stack direction="row">
                <Radio value="hotels">Hotels</Radio>
                <Radio value="restaurants">Restaurants</Radio>
                <Radio value="attractions">Attractions</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
