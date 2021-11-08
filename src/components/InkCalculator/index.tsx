import React, { useState } from 'react';
import { InkCalcContainer, InkCalcTitle } from '@styles/inkCalculator';
import WallSelection from './WallSelection';
import WallComputation from './WallComputation';
import { wall, initialState } from './_utils';

function InkCalculator() {
  const [currentWall, setCurrentWall] = useState<wall>(wall.wallA1);
  const [walls, setWalls] = useState(initialState);

  const setHeight = (height: number) => (setWalls(st => ({ ...st, [currentWall]: { ...st[currentWall], wall: { ...st[currentWall].wall, height } } })));
  const setWidth = (width: number) => (setWalls(st => ({ ...st, [currentWall]: { ...st[currentWall], wall: { ...st[currentWall].wall, width } } })));
  const setDoors = (doors: number) => (setWalls(st => ({ ...st, [currentWall]: { ...st[currentWall], doors } })));
  const setWindows = (windows: number) => (setWalls(st => ({ ...st, [currentWall]: { ...st[currentWall], windows } })));

  const setData = { setHeight, setWidth, setDoors, setWindows };

  return (
    <InkCalcContainer>
      <InkCalcTitle>Ink Calculator</InkCalcTitle>
      <WallSelection currentSelected={currentWall} onClick={setCurrentWall} />
      <WallComputation
        wallName={currentWall}
        currentWall={walls[currentWall]}
        setData={setData}
      />
    </InkCalcContainer>
  );
}

export default InkCalculator;
