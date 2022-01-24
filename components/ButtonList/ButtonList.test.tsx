import { fireEvent, render } from "@testing-library/react";
import {
  IconButton,
  HStack,
  useColorMode,
  Link,
  Switch,
} from "@chakra-ui/react";

import ButtonList from "./ButtonList";

const mockUseColorMode = jest.fn();
const mockSetColorMode = jest.fn();
jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useColorMode: () => mockUseColorMode(),
}));

beforeEach(() => {
  mockUseColorMode.mockClear();
  mockSetColorMode.mockClear();
});

it("should render button list", () => {
  mockUseColorMode.mockReturnValue({
    colorMode: "light",
    setColorMode: (param: any) => mockSetColorMode(param),
  });
  const { container } = render(<ButtonList />);
  expect(container.firstChild?.childNodes.length).toEqual(4);
});

test("clicking switch should change color mode", () => {
  mockUseColorMode.mockReturnValue({
    colorMode: "light",
    setColorMode: (param: any) => mockSetColorMode(param),
  });
  const { getByLabelText } = render(<ButtonList />);
  const sw = getByLabelText("dark mode switch");
  fireEvent.click(sw);
  expect(mockSetColorMode).toHaveBeenCalledWith("dark");
});

test("clicking switch should change color mode", () => {
  mockUseColorMode.mockReturnValue({
    colorMode: "dark",
    setColorMode: (param: any) => mockSetColorMode(param),
  });
  const { getByLabelText } = render(<ButtonList />);
  const sw = getByLabelText("dark mode switch");
  fireEvent.click(sw);
  expect(mockSetColorMode).toHaveBeenCalledWith("light");
});
