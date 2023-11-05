import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../utils/types";

export type ModalState = {
  isShown: boolean;
  modalName: string | null;
};

const initialState: ModalState = {
  isShown: false,
  modalName: null
};

const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<string>) => {
      state.isShown = true; // we can now mutate the state directly here because we're using Immer
      state.modalName = action.payload;
    },
    hide: (state) => {
      state.isShown = false;
      state.modalName = null;
    }
  }
});

export const modalVisible = slice.reducer;

export const { show, hide } = slice.actions;

export const modalVisibleSelector = (state: RootState) => state.modalVisible;

export const modalNameSelector = (state: RootState) => state.modalVisible.modalName;
