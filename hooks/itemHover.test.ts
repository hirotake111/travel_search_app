import { useItemHover } from "./itemHover";

// mock dispatch
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

beforeEach(() => {
  mockDispatch.mockClear();
});

it("should update hoveredPlace state", () => {
  expect.assertions(2);
  const { setHoveredPlace } = useItemHover();
  setHoveredPlace("adele");
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "search/updateHoveredPlace",
    payload: "adele",
  });
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});

it("should not update hoveredPlace state if not passed name param", () => {
  expect.assertions(1);
  const { setHoveredPlace } = useItemHover();
  setHoveredPlace(undefined as any);
  expect(mockDispatch).toHaveBeenCalledTimes(0);
});
