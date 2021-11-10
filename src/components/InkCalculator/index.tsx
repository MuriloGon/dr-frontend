import React, { useState } from 'react';
import { Wall, initialState } from './_utils';
import InkResult from './InkResult';
import InkForms from './InkForms';

function InkCalculator() {
  const [currentWall, setCurrentWall] = useState<Wall>(Wall.wallA1);
  const [walls, setWalls] = useState(initialState);

  const setHeight = (height: number) => (
    setWalls((st) => ({
      ...st,
      [currentWall]: {
        ...st[currentWall], wall: { ...st[currentWall].wall, height },
      },
    })));
  const setWidth = (width: number) => (
    setWalls((st) => ({
      ...st,
      [currentWall]: { ...st[currentWall], wall: { ...st[currentWall].wall, width } },
    })));
  const setDoors = (doors: number) => (
    setWalls((st) => ({ ...st, [currentWall]: { ...st[currentWall], doors } })));
  const setWindows = (windows: number) => (
    setWalls((st) => ({ ...st, [currentWall]: { ...st[currentWall], windows } })));

  const setData = {
    setHeight, setWidth, setDoors, setWindows,
  };

  const windowDim = { width: 2, height: 1.2 };
  const doorDim = { width: 0.8, height: 1.9 };

  return (
    <>
      <InkForms
        currentWall={currentWall}
        setCurrentWall={setCurrentWall}
        setData={setData}
        walls={walls}
      />
      <InkResult
        windowDimension={windowDim}
        doorDimension={doorDim}
        walls={walls}
      />
    </>
  );
}

export default InkCalculator;
