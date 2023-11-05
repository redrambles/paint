import React from "react";
import { useDispatch } from "react-redux";
import { undo, redo } from "../modules/historyIndex/actions";
import { strokesLengthSelector } from "../modules/strokes/reducer";
import { useSelector } from "react-redux";

export const EditPanel = () => {
  const dispatch = useDispatch();
  const undoLimit = useSelector(strokesLengthSelector);

  return (
    <div className='window edit'>
      <div className='title-bar'>
        <div className='title-bar-text'>Edit</div>
        <div className='window-body'>
          <div className='field-row'>
            <button className='button redo' onClick={() => dispatch(redo())}>
              Redo
            </button>
          </div>
          <div className='field-row'>
            <button className='button undo' onClick={() => dispatch(undo(undoLimit))}>
              Undo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
