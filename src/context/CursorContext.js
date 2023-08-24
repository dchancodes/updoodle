import React, { useState, useEffect, createContext } from 'react';

export const CursorContext = createContext();

const CursorProvider= ({children}) => {
  // Cursor position state
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', move );
    // remove event
    return () => {
      window.removeEventListener('mousemove', move);
    }
  })

  return <CursorContext.Provider value={'this is the cursor context'}>
    {children}
  </CursorContext.Provider>;
};

export default CursorProvider;
