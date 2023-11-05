import { RootState } from "../../utils/types";
import { Action, END_STROKE } from "./actions";

export const reducer = (state: RootState["strokes"] = [], action: Action) => {
  switch (action.type) {
    case END_STROKE: {
      const { historyIndex, stroke } = action.payload;
      if (!stroke.points.length) {
        return state;
      }
      // Overwrite the items that were 'undone' with the new stroke
      return [...state.slice(0, state.length - historyIndex), stroke];
    }
    default:
      return state;
  }
};

export const strokesLengthSelector = (state: RootState) => state.strokes.length;

export const strokesSelector = (state: RootState) => state.strokes;
