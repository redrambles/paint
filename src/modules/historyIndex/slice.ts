import { RootState } from "../../utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { endStroke } from "../sharedActions";

export const historyIndex = createSlice({
  name: "historyIndex",
  initialState: 0,
  reducers: {
    undo: (state, action: PayloadAction<number>) => Math.min(state + 1, action.payload),
    redo: (state) => Math.max(state - 1, 0)
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, () => 0); // reset historyIndex to 0 when a stroke is done
  }
});

export default historyIndex.reducer;

export const { undo, redo } = historyIndex.actions;

export const historyIndexSelector = (state: RootState) => state.historyIndex;
