import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchState, Place, SearchType } from "../../types";
import { Bounds, Coords } from "google-map-react";

const initialState: SearchState = {
  places: [],
  coordinates: undefined,
  bounds: undefined,
  zoom: 11,
  selectedPlace: undefined,
  hoveredPlace: undefined,
  searchType: "hotels",
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
    updateSearchType: (state, action: PayloadAction<SearchType>) => {
      state.searchType = action.payload;
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
  updateSearchType,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
