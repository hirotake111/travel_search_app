import { renderHook, act } from "@testing-library/react-hooks";

import { useSelectedPlace } from "./selectedPlace";

// mock dispatch and selector
const mockDispatch = jest.fn();
const mockSelector = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: (param: any) => mockSelector(param),
}));

const defaultValue = { selectedPlace: "aaa" };
beforeEach(() => {
  mockDispatch.mockClear();
  mockSelector.mockClear();
  mockSelector.mockReturnValue(defaultValue);
});

it("should return selectedPlace", () => {
  const { result } = renderHook(() => useSelectedPlace());
  expect(result.current.selectedPlace).toBe("aaa");
});

test("setSelectedPlace should dispath", () => {
  const { result } = renderHook(() => useSelectedPlace());
  act(() => {
    result.current.setSelectedPlace("bbb");
  });
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "search/updateSelectedPlace",
    payload: "bbb",
  });
});

test("setSelectedPlace should not dispath if same place", () => {
  const { result } = renderHook(() => useSelectedPlace());
  act(() => {
    result.current.setSelectedPlace("aaa");
  });
  expect(mockDispatch).toHaveBeenCalledTimes(0);
});
