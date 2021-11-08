import React, { FC } from 'react';
import { InkCalcWallButton } from '../../styles/inkCalculator';
import { Wall } from './_utils';

type Props = {
  currentSelected: Wall;
  onClick: (wallToSelect: Wall) => void;
};

const WallSelection: FC<Props> = ({ currentSelected, onClick }) => {
  const eventsHandle = (selection: Wall) => ({
    onClick: () => onClick(selection),
    selected: currentSelected === selection,
  });
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <InkCalcWallButton {...eventsHandle(Wall.wallA1)}>Parede A1</InkCalcWallButton>
      <InkCalcWallButton {...eventsHandle(Wall.wallA2)}>Parede A2</InkCalcWallButton>
      <InkCalcWallButton {...eventsHandle(Wall.wallB1)}>Parede B1</InkCalcWallButton>
      <InkCalcWallButton {...eventsHandle(Wall.wallB2)}>Parede B2</InkCalcWallButton>
    </div>
  );
};

export default WallSelection;
