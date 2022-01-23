import { renderHook } from "@testing-library/react-hooks";
import { usePlaceRefs } from "./placeRefs";

// mock selector
const mockSelector = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: (param: any) => mockSelector(param),
}));

const defaultValue = {
  places: [],
  selectedPlace: undefined,
};
beforeEach(() => {
  mockSelector.mockClear();
  mockSelector.mockReturnValue(defaultValue);
});

test("it should return an array of refs", () => {
  const { result } = renderHook(() => usePlaceRefs());
  expect(result.current.refs.length).toBe(0);
});

test("it should update refs if places has updated", () => {
  mockSelector.mockReturnValue({
    ...defaultValue,
    places: [1, 2, 3],
  });
  const { result } = renderHook(() => usePlaceRefs());
  expect(result.current.refs.length).toBe(3);
});

test("it should invoke scrollIntoView() if selectedPlace has updated", () => {
  const mockScroll = jest.fn();
  const places = [{ name: "aaa" }, { name: "bbb" }, { name: "ccc" }];
  mockSelector.mockReturnValue({
    places,
    selectedPlace: "KFG",
  });
  const { result } = renderHook(() => usePlaceRefs());
  expect(result.current.refs.length).toBe(3);
});
