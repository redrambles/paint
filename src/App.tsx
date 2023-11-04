import React, { useEffect, useRef } from "react";
import { clearCanvas, setCanvasSize } from "./utils/canvasUtils";

const WIDTH = 1012;
const HEIGHT = 768;

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext("2d") };
  };

  const startDrawing = () => {
    console.log("Mouse is down and moving");
  };

  const endDrawing = () => {
    console.log("Mouse is up or outside of canvas area");
  };

  const draw = () => {
    console.log("mouse is moving");
  };

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();
    if (!canvas || !context) return;
    setCanvasSize(canvas, WIDTH, HEIGHT);
    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 5;
    context.strokeStyle = "black";

    clearCanvas(canvas);
  }, []);

  return (
    <div className='window'>
      <div className='title-bar'>
        <div className='title-bar-text'>Redux Paint</div>
        <div className='title-bar-controls'>
          <button aria-label='Close' />
        </div>
      </div>
      <canvas ref={canvasRef} onMouseDown={startDrawing} onMouseUp={endDrawing} onMouseOut={endDrawing} onMouseMove={draw} />
    </div>
  );
}

export default App;
