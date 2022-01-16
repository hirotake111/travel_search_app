import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
} from "@chakra-ui/react";

import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import { useState } from "react";

export default function Filter() {
  return (
    <Accordion allowToggle>
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
            <CheckboxGroup
              colorScheme="green"
              defaultValue={["hotel", "restaurant", "other"]}
            >
              <Stack
                spacing={[1, 5]}
                direction={["column", "row"]}
                maxWidth={{ sm: "240px", md: "100%" }}
              >
                <Checkbox value="hotel">Hotel</Checkbox>
                <Checkbox value="restaurant">Restaurant</Checkbox>
                <Checkbox value="other">Other</Checkbox>
              </Stack>
            </CheckboxGroup>{" "}
          </Box>
        </AccordionPanel>
        <AccordionPanel pb={4}>
          <Box padding="0 16px" display="flex">
            <span style={{ paddingRight: "12px" }}>Rating:</span>
            <Slider
              defaultValue={0}
              min={0}
              max={5}
              step={1}
              maxWidth={{ sm: "240px", md: "100%" }}
            >
              <SliderTrack bg="red.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="tomato" />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>{" "}
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
