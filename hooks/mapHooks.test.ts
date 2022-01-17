import { renderHook } from "@testing-library/react-hooks";

import { useCoordinates } from "./mapHooks";

describe("useCoordinates", () => {
  it("should return default coorinates", () => {
    const { result } = renderHook(() => useCoordinates());
    expect(result.current.coordinates).toEqual({ lat: 51.5072, lng: 0.1276 });
  });
});
