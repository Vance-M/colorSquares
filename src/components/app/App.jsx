/* eslint-disable max-len */
import React from 'react';
import { useRecord } from './hooks/record';

function App() {
  const { color, current, index, handleRecord, handleRedo, handleUndo } = useRecord();

  return (
    <>
      <button onClick={handleUndo} disabled={index === 0}>Undo</button>
      <button onClick={handleRedo} disabled={index === color.length - 1 || color.length === 0}>Redo</button>
      <input placeholder="colors" type="color" value={current} onChange={handleRecord} />
      <div style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  );
}

export default App;
