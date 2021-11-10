import React, { FC } from 'react';
import { InkCalcContainer, InkCalcTitle } from '@styles/inkCalculator';
import WallSelection from './WallSelection';
import WallComputation from './WallComputation';

type Props = {
  currentWall: any;
  setCurrentWall: any;
  setData: any;
  walls: any;
};

const InkForms: FC<Props> = ({
  currentWall, setCurrentWall, walls, setData,
}) => (
  <InkCalcContainer>
    <InkCalcTitle>Ink Calculator</InkCalcTitle>
    <WallSelection currentSelected={currentWall} onClick={setCurrentWall} />
    <WallComputation
      currentWall={walls[currentWall]}
      setData={setData}
    />
  </InkCalcContainer>
);

export default InkForms;
