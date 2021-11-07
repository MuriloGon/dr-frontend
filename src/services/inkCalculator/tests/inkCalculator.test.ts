import * as inkCalculator from '..';
import { Wall } from '../_utils';

const failWall1: Wall = { width: 0.5, height: 15 };
const failWall2: Wall = { width: 15, height: 0.5 };
const failWall3: Wall = { width: 1, height: 30 };
const failWall4: Wall = { width: 1, height: 100 };
const success1: Wall = { width: 1, height: 15 };
const success2: Wall = { width: 4, height: 12 };

describe('Wall dimensions constrains', () => {
  test('no walls should be less than 1 meter and more than 15 meters - No Doors or windows', () => {
    const errorMsg = /A wall must have at least 1 and at most 15/;
    expect(() => inkCalculator.validateWallDimensions(failWall1)).toThrow(errorMsg);
    expect(() => inkCalculator.validateWallDimensions(failWall2)).toThrow(errorMsg);
    expect(() => inkCalculator.validateWallDimensions(failWall3)).toThrow(errorMsg);
    expect(() => inkCalculator.validateWallDimensions(failWall4)).toThrow(errorMsg);
    expect(inkCalculator.validateWallDimensions(success1)).toBeTruthy();
    expect(inkCalculator.validateWallDimensions(success2)).toBeTruthy();
  });
});
