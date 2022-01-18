import { renderHook } from "@testing-library/react-hooks";

import { useCoordinates } from "./map";

describe("useCoordinates", () => {
  it("should return default coorinates and zoom", () => {
    expect.assertions(2);
    const { result } = renderHook(() => useCoordinates(false));
    expect(result.current.coordinates).toEqual({ lat: 51.5072, lng: 0.1276 });
    expect(result.current.zoom).toBe(11);
  });
});
