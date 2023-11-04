import { BEGIN_STROKE, UPDATE_STROKE, END_STROKE } from "./actions";
type RootState = {};

type Action = {
  type: string;
};

export const rootReducer = (state: RootState = {}, action: Action) => {
  switch (action.type) {
    case "TEST_ACTION":
      console.log("The test action was dispatched!");
      return { ...state, test: "test" };
    case BEGIN_STROKE:
      return state;
    case UPDATE_STROKE:
      return state;
    case END_STROKE:
      return state;
    default:
      return state;
  }
};
