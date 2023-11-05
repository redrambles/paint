import { Point } from "./types";

export const clearCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

export const setCanvasSize = (canvas: HTMLCanvasElement, width: number, height: number) => {
  canvas.width = width * 2; // retina
  canvas.height = height * 2; // retina
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.getContext("2d")?.scale(2, 2); // retina
};

export const drawStroke = (context: CanvasRenderingContext2D, points: Point[], color: string) => {
  if (!points.length) return;
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  points.forEach((pt) => {
    context.lineTo(pt.x, pt.y);
    context.stroke();
  });
  context.closePath();
};

export const getCanvasImage = async (canvas: HTMLCanvasElement | null): Promise<null | Blob> => {
  return new Promise((resolve, reject) => {
    if (!canvas) reject(null);
    canvas?.toBlob(resolve);
  });
};
