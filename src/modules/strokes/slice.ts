import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../utils/types";
import { endStroke } from "../sharedActions";

const initialState: RootState["strokes"] = [];

export const strokes = createSlice({
  name: "strokes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state, action) => {
      const { stroke, historyIndex } = action.payload;
      if (historyIndex === 0) {
        state.push(stroke); // we can mutate the state directly here because we're using Immer
      } else {
        state.splice(-historyIndex, historyIndex, stroke);
      }
    });
  }
});

export default strokes.reducer;

export const strokesLengthSelector = (state: RootState) => state.strokes.length;

export const strokesSelector = (state: RootState) => state.strokes;
