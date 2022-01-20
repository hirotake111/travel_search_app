import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../store";

const initialState: SearchState = {
  places: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    update: (state, action: PayloadAction<Place[]>) => {
      // console.log("action.payload", action.payload);
      state.places = [...action.payload];
      console.log("places:", state.places ? state.places.length : "nothing");
    },
    // update: (state) => {
    //   state.places = [];
    // },
  },
});

export const { update } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
