import { renderHook } from "@testing-library/react-hooks";
import { Coords } from "google-map-react";
import { Place } from "../types";

import { useCoordinates } from "./map";

// mock dispatch and selector
const mockDispatch = jest.fn();
const mockSelector = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: (param: any) => mockSelector(param),
}));

// mock geolocation
const mockGetCurrentPosition = jest.fn();
const geolocation = {
  getCurrentPosition: (callback: any) => {
    callback({ coords: { latitude: 1, longitude: 1 } });
    return mockGetCurrentPosition();
  },
};

// mock getData
const mockGetData = jest.fn();
jest.mock("../utils/api", () => ({
  getData: () => mockGetData(),
}));

Object.defineProperty(global.navigator, "geolocation", {
  value: geolocation,
});

beforeEach(() => {
  mockDispatch.mockClear();
  mockSelector.mockClear();
  mockSelector.mockReturnValue(mockDefaultVale);
  mockGetCurrentPosition.mockClear();
  mockGetData.mockClear();
  mockGetData.mockResolvedValue([]);
});

const co: Coords = { lat: 0, lng: 0 };
const bounds = { ne: co, nw: co, sw: co, se: co };
const mockDefaultVale = {
  coordinates: { lat: 51.5072, lng: 0.1276 },
  bounds,
  zoom: 11,
  places: [],
  searchType: "hotels",
};

describe("useCoordinates", () => {
  it("should return default coorinates and zoom", () => {
    expect.assertions(2);
    const { result } = renderHook(() => useCoordinates(false));
    expect(result.current.coordinates).toEqual({ lat: 51.5072, lng: 0.1276 });
    expect(result.current.zoom).toBe(11);
  });

  it("should ask user's current geolocation", () => {
    renderHook(() => useCoordinates(true));
    expect(mockGetCurrentPosition).toHaveBeenCalledTimes(1);
  });

  it("should fetch places data from api and save it", () => {
    expect.assertions(1);
    renderHook(() => useCoordinates(false));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "search/updatePlace",
      payload: [],
    });
  });

  it("should not update places if bounds is falsy value", () => {
    expect.assertions(1);
    mockSelector.mockReturnValue({ ...mockDefaultVale, bounds: undefined });
    renderHook(() => useCoordinates(false));
    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });

  test("setBoundaries should update boundaries", () => {
    expect.assertions(1);
    const c: Coords = { lat: 1, lng: 2 };
    const bounds = { ne: c, nw: c, sw: c, se: c };
    const { result } = renderHook(() => useCoordinates(false));
    result.current.setBoundaries(bounds);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "search/updateBounds",
      payload: bounds,
    });
  });

  test("setZoom should update zoom", () => {
    const { result } = renderHook(() => useCoordinates(false));
    result.current.setZoom(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "search/updateZoom",
      payload: 1,
    });
  });

  test("setPlaces should update places", () => {
    const place: Place = { name: "KFG", latitude: "4", longitude: "5" };
    const { result } = renderHook(() => useCoordinates(false));
    result.current.setPlaces([place]);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "search/updatePlace",
      payload: [place],
    });
  });
});
