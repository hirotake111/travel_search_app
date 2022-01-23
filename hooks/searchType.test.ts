import { act, renderHook } from "@testing-library/react-hooks";
import { Bounds, Coords } from "google-map-react";
import { useSearchType } from "./searchType";

// mock dispatch and selector
const mockDispatch = jest.fn();
const mockSelector = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: (param: any) => mockSelector(param),
}));

const co: Coords = { lat: 0, lng: 0 };
const bounds: Bounds = { ne: co, nw: co, sw: co, se: co };
const defaultValue = { searchType: "hotels", bounds };

beforeEach(() => {
  mockDispatch.mockClear();
  mockSelector.mockClear();
  mockSelector.mockReturnValue(defaultValue);
});

it("should return search type", () => {
  const { result } = renderHook(() => useSearchType());
  expect(result.current.searchType).toBe("hotels");
});

test("setSearchType should dispatch", () => {
  const { result } = renderHook(() => useSearchType());
  act(() => {
    result.current.setSearchType("attractions");
  });
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "search/updateSearchType",
    payload: "attractions",
  });
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "search/updatePlace",
    payload: [],
  });
});
