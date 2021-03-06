import React, { FC } from 'react';
import { ResultContainer } from '@styles/inkCalculator';
import * as inkCalc from '@services/inkCalculator';
import ErrorsLog from './ErrorsLog';
import { Walls } from '../_utils';
import ComputeInk from './ComputeInk';

type Props = {
  doorDimension: { width: number, height: number };
  windowDimension: { width: number, height: number };
  walls: Walls;
  resetComputations: () => void;
};

const InkResult: FC<Props> = ({
  doorDimension, windowDimension, walls, resetComputations,
}) => {
  const mapWalls = Object.entries(walls).map(([key, data]) => ({
    wallName: key,
    wall: data.wall,
    doors: Array(data.doors).fill(doorDimension),
    windows: Array(data.windows).fill(windowDimension),
  }));

  const errorsLog = mapWalls.map(({
    wallName, wall, doors, windows,
  }) => ({
    wallName,
    validation: inkCalc.validations(wall, doors, windows),
  }));

  const wallsWithErrors = errorsLog.filter(
    ({ validation }) => validation.some(({ valid }) => valid),
  );

  const formattedErrors = wallsWithErrors.map(({ wallName, validation }) => ({
    wallName,
    validations: validation.filter(
      ({ valid }) => valid === false,
    ) as { valid: boolean; message: string; }[],
  }));

  const hasErrors = formattedErrors.some(({ validations }) => validations.length > 0);

  return (
    <ResultContainer>
      {hasErrors
        ? (<ErrorsLog wallsErrors={formattedErrors} />)
        : (
          <ComputeInk
            doorDimensions={doorDimension}
            windowDimensions={windowDimension}
            walls={walls}
            resetComputations={resetComputations}
          />
        )}
    </ResultContainer>
  );
};

export default InkResult;
