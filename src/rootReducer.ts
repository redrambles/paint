type RootState = {};

type Action = {
  type: string;
};

export const rootReducer = (state: RootState = {}, action: Action) => {
  switch (action.type) {
    case "TEST_ACTION":
      console.log("The test action was dispatched!");
      return { ...state, test: "test" };
    default:
      return state;
  }
};
