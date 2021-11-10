import React, { FC } from 'react';
import { InkCalcWallButton, ButtonsContainer } from '@styles/inkCalculator';
import { Wall } from '../_utils';

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
    <ButtonsContainer>
      <InkCalcWallButton {...eventsHandle(Wall.wallA1)}>Parede A1</InkCalcWallButton>
      <InkCalcWallButton {...eventsHandle(Wall.wallA2)}>Parede A2</InkCalcWallButton>
      <InkCalcWallButton {...eventsHandle(Wall.wallB1)}>Parede B1</InkCalcWallButton>
      <InkCalcWallButton {...eventsHandle(Wall.wallB2)}>Parede B2</InkCalcWallButton>
    </ButtonsContainer>
  );
};

export default WallSelection;
