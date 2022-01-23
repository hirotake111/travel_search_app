import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useSearchbar } from "./searchbar";

// mock dispatch and selector
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

beforeEach(() => {
  mockDispatch.mockClear();
});

it("should return null for autocomplete", () => {
  const { result } = renderHook(() => useSearchbar());
  expect(result.current.autocomplete).toBe(null);
});

it("should dispatch when location in ac is defined", () => {
  const mockAC = {
    getPlace: () => ({
      geometry: { location: { lat: () => 1, lng: () => 2 } },
    }),
  } as any;
  const { result } = renderHook(() => useSearchbar());
  act(() => {
    result.current.setAutocomplete(mockAC);
  });
  act(() => {
    result.current.setCoordUsingAutocomplete();
  });
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "search/updateCoordinates",
    payload: { lat: 1, lng: 2 },
  });
});

it("should not dispatch when location in ac is undefined", () => {
  const { result } = renderHook(() => useSearchbar());
  act(() => {
    result.current.setCoordUsingAutocomplete();
  });
  expect(mockDispatch).toHaveBeenCalledTimes(0);
});
