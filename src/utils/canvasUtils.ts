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
