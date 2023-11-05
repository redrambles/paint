import historyIndex from "./modules/historyIndex/slice";
import currentStroke from "./modules/currentStroke/slice";
import strokes from "./modules/strokes/slice";
import { logger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    historyIndex,
    currentStroke,
    strokes
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
