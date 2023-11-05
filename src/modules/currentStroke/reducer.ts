import { RootState } from "../../utils/types";
import { beginStroke, updateStroke, setStrokeColor } from "./actions";
import { endStroke } from "../sharedActions";
import { createReducer } from "@reduxjs/toolkit";

const initialState: RootState["currentStroke"] = {
  points: [],
  color: "#000000"
};

// with createReducer, you can mutate the state directly rather than always returning a new state
export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(beginStroke, (state, action) => {
    state.points = [action.payload];
  });
  builder.addCase(updateStroke, (state, action) => {
    state.points.push(action.payload);
  });
  builder.addCase(setStrokeColor, (state, action) => {
    state.color = action.payload;
  });
  builder.addCase(endStroke, (state) => {
    state.points = [];
  });
});

export const currentStrokeSelector = (state: RootState) => state.currentStroke;
