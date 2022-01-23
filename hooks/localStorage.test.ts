import { act, renderHook } from "@testing-library/react-hooks";
import { useLocalStorage } from "./localStorage";

beforeEach(() => {
  // every time clear local storage
  window.localStorage.clear();
});

it("should return undefined as default value", () => {
  const { result } = renderHook(() => useLocalStorage("key"));
  expect(result.current[0]).toBe(undefined);
});

it("should return value after setting value", () => {
  const data = { name: "hiro", age: 13 };
  const { result } = renderHook(() => useLocalStorage("key"));
  act(() => {
    result.current[1](data);
  });
  expect(result.current[0]).toEqual(data);
});

it("should return value if data exists in local storage", () => {
  // store data in advance
  const key = "xxx";
  const data = { name: "dave", age: 50 };
  window.localStorage.setItem(key, JSON.stringify(data));
  const { result } = renderHook(() => useLocalStorage(key));
  expect(result.current[0]).toEqual(data);
});
