import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchState, Place } from "../../types";
import { Bounds, Coords } from "google-map-react";

const initialState: SearchState = {
  places: [],
  coordinates: undefined,
  bounds: undefined,
  zoom: 11,
  selectedPlace: undefined,
  hoveredPlace: undefined,
  googleMapsLoaded: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updatePlace: (state, action: PayloadAction<Place[]>) => {
      state.places = [...action.payload.filter((place) => place.name)];
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
    updateSelectedPlace: (state, action: PayloadAction<string>) => {
      state.selectedPlace = action.payload;
    },
    updateHoveredPlace: (state, action: PayloadAction<string>) => {
      state.hoveredPlace = action.payload;
    },
    updateGoogleMapsLoaded: (state) => {
      state.googleMapsLoaded = true;
    },
  },
});

export const {
  updatePlace,
  updateCoordinates,
  updateBounds,
  updateZoom,
  updateSelectedPlace,
  updateHoveredPlace,
  updateGoogleMapsLoaded,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
