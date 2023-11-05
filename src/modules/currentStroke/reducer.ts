import { Action, UPDATE_STROKE, BEGIN_STROKE, END_STROKE, SET_STROKE_COLOR, TEST_ACTION } from "./actions";
import { RootState } from "../../utils/types";

const initialState: RootState["currentStroke"] = {
  points: [],
  color: "#000000"
};

export const reducer = (state: RootState["currentStroke"] = initialState, action: Action) => {
  switch (action.type) {
    case TEST_ACTION:
      console.log(action.payload);
      return { ...state };
    case BEGIN_STROKE:
      return {
        ...state,
        points: [action.payload]
      };
    case UPDATE_STROKE:
      return {
        ...state,
        points: [...state.points, action.payload]
      };
    case SET_STROKE_COLOR:
      return {
        ...state,
        color: action.payload
      };
    case END_STROKE:
      return {
        ...state,
        points: []
      };
    default:
      return state;
  }
};

export const currentStrokeSelector = (state: RootState) => state.currentStroke;
