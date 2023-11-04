import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

// To test the logger
store.dispatch({ type: "TEST_ACTION" });