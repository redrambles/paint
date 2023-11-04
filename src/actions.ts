import { Point } from "./utils/types";

export const BEGIN_STROKE = "BEGIN_STROKE";
export const UPDATE_STROKE = "UPDATE_STROKE";
export const END_STROKE = "END_STROKE";
export const TEST_ACTION = "TEST_ACTION";

export type Action =
  | {
      type: typeof BEGIN_STROKE;
      payload: Point;
    }
  | {
      type: typeof UPDATE_STROKE;
      payload: Point;
    }
  | {
      type: typeof TEST_ACTION;
      payload: string;
    }
  | {
      type: typeof END_STROKE;
    };

export const beginStroke = (x: number, y: number): Action => {
  return { type: BEGIN_STROKE, payload: { x, y } };
};

export const updateStroke = (x: number, y: number): Action => {
  return { type: UPDATE_STROKE, payload: { x, y } };
};

export const endStroke = (): Action => {
  return { type: END_STROKE };
};
