import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../store";
import { SearchState, Place } from "../../types";
import { Bounds, Coords } from "google-map-react";

const initialState: SearchState = {
  places: [],
  // coordinates: {
  //   // default -> London
  //   lat: 51.5072,
  //   lng: 0.1276,
  // },
  // bounds: {
  //   // default -> London
  //   nw: {
  //     lat: 51.6610098726037,
  //     lng: -0.1268021606445302,
  //   },
  //   se: {
  //     lat: 51.35286914757705,
  //     lng: 0.3820021606445323,
  //   },
  //   sw: {
  //     lat: 51.35286914757705,
  //     lng: -0.1268021606445302,
  //   },
  //   ne: {
  //     lat: 51.6610098726037,
  //     lng: 0.3820021606445323,
  //   },
  // },
  coordinates: undefined,
  bounds: undefined,
  zoom: 11,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updatePlace: (state, action: PayloadAction<Place[]>) => {
      state.places = [...action.payload];
    },
    updateCoordinates: (state, action: PayloadAction<Coords>) => {
      state.coordinates = action.payload;
    },
    updateBounds: (state, action: PayloadAction<Bounds>) => {
      state.bounds = action.payload;
    },
    updateZoom: (state, aciton: PayloadAction<number>) => {
      state.zoom = aciton.payload;
    },
  },
});

export const { updatePlace, updateCoordinates, updateBounds, updateZoom } =
  searchSlice.actions;
export const searchReducer = searchSlice.reducer;
