import { Point, Stroke } from "../../utils/types";
import { AnyAction } from "@reduxjs/toolkit";

export const BEGIN_STROKE = "BEGIN_STROKE";
export const UPDATE_STROKE = "UPDATE_STROKE";
export const END_STROKE = "END_STROKE";
export const SET_STROKE_COLOR = "SET_STROKE_COLOR";
export const TEST_ACTION = "TEST_ACTION";

export type Action =
  | AnyAction
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
      payload: { stroke: Stroke; historyIndex: number };
    }
  | {
      type: typeof SET_STROKE_COLOR;
      payload: string;
    };

export const beginStroke = (x: number, y: number): Action => {
  return { type: BEGIN_STROKE, payload: { x, y } };
};

export const updateStroke = (x: number, y: number): Action => {
  return { type: UPDATE_STROKE, payload: { x, y } };
};

export const setStokeColor = (color: string): Action => {
  return { type: SET_STROKE_COLOR, payload: color };
};

export const endStroke = (historyIndex: number, stroke: Stroke): Action => {
  return { type: END_STROKE, payload: { stroke, historyIndex } };
};
