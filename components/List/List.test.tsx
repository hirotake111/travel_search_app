import { fireEvent, render } from "@testing-library/react";
import { Place } from "../../types";
import List from "./List";

// mock dispatch and selector
const mockDispatch = jest.fn();
const mockSelector = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: (param: any) => mockSelector(param),
}));

// mock hooks
const mockSetHoverredPlace = jest.fn();
jest.mock("../../hooks/itemHover", () => ({
  useItemHover: () => ({
    setHoveredPlace: (param: any) => mockSetHoverredPlace(param),
  }),
}));

interface DefaultValue {
  places: Place[];
}
const defaultValue: DefaultValue = {
  places: [
    { name: "a", latitude: "1", longitude: "1" },
    {
      name: "b",
      latitude: "2",
      longitude: "2",
      web_url: "https://example.com",
    },
    { name: "c", latitude: "3", longitude: "3", rating: "4.5" },
    { name: "d", latitude: "4", longitude: "4" },
    { name: "e", latitude: "5", longitude: "5" },
  ],
};
beforeEach(() => {
  mockDispatch.mockClear();
  mockSelector.mockClear();
  mockSelector.mockReturnValue(defaultValue);
  mockSetHoverredPlace.mockClear();
});

it("should render places", () => {
  const { getAllByLabelText } = render(<List />);
  expect(getAllByLabelText("item").length).toBe(5);
  expect(getAllByLabelText("divider").length).toBe(4);
});

test("mouse over item should invoke setHoveredPlace", () => {
  const { getAllByLabelText } = render(<List />);
  // mouse over
  fireEvent.mouseEnter(getAllByLabelText("item")[0]);
  expect(mockSetHoverredPlace).toHaveBeenCalledWith("a");
});

it("should render dummy items when no places are provided", () => {
  mockSelector.mockReturnValue({ places: [] });
  const { getAllByLabelText } = render(<List />);
  expect(getAllByLabelText("dummy").length).toBe(5);
});

it("should render awards when an item has it", () => {
  mockSelector.mockReturnValue({
    places: [
      {
        name: "a",
        latitude: "1",
        longitude: "1",
        awards: [{ display_name: "award!" }],
      },
    ],
  });
  const { getAllByText } = render(<List />);
  expect(getAllByText("award!").length).toBe(1);
});
