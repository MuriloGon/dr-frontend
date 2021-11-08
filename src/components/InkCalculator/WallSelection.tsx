import React, { FC } from 'react';
import { InkCalcWallButton } from '../../styles/inkCalculator';
import { wall } from './_utils';

type Props = {
  currentSelected: wall;
  onClick: (wallToSelect: wall) => void;
}

const WallSelection:  FC<Props> = ({ currentSelected, onClick }) => {
  const eventsHandle = (selection: wall) => ({
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => onClick(selection),
    selected: currentSelected === selection
  })
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <InkCalcWallButton {...eventsHandle(wall.wallA1)}>Parede A1</InkCalcWallButton>
      <InkCalcWallButton {...eventsHandle(wall.wallA2)}>Parede A2</InkCalcWallButton>
      <InkCalcWallButton {...eventsHandle(wall.wallB1)}>Parede B1</InkCalcWallButton>
      <InkCalcWallButton {...eventsHandle(wall.wallB2)}>Parede B2</InkCalcWallButton>
    </div>
  )
}

export default WallSelection;
