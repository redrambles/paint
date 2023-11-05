import { ModalState } from "../modules/modals/slice";

export type RootState = {
  currentStroke: Stroke;
  strokes: Stroke[]; // array of Stroke type elements
  historyIndex: number;
  modalVisible: ModalState;
};

export type Stroke = {
  points: Point[]; // array of Point type elements
  color: string;
};

export type Point = {
  x: number;
  y: number;
};
