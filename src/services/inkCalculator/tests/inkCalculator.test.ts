import * as inkCalculator from '..';
import { Wall } from '../_utils';

const failWall1: Wall = { width: 0.5, height: 15 };
const failWall2: Wall = { width: 15, height: 0.5 };
const failWall3: Wall = { width: 1, height: 30 };
const failWall4: Wall = { width: 1, height: 100 };
const success1: Wall = { width: 1, height: 15 };
const success2: Wall = { width: 4, height: 12 };

describe('Helpers Functions', () => {
  test('The maxObjectsHeight() must return the greater height among all doors and windows', () => {
    const mockDoors = [{ width: 2, height: 2.4 }, { width: 0.5, height: 3 }];
    const mockWindows = [{ width: 1, height: 2.5 }, { width: 2, height: 2.1 }];
    const expected = inkCalculator.maxObjectsHeight(mockDoors, mockWindows);
    expect(expected).not.toBe(2.1);
    expect(expected).not.toBe(2.4);
    expect(expected).not.toBe(2.6);
    expect(expected).toBe(3);
  });
  test('The maxObjectsWidth() must return the greater width among all doors and windows', () => {
    const mockDoors = [{ width: 5, height: 2.4 }, { width: 0.5, height: 3 }];
    const mockWindows = [{ width: 1, height: 2.5 }, { width: 2, height: 2.1 }];
    const expected = inkCalculator.maxObjectsWidth(mockDoors, mockWindows);
    expect(expected).not.toBe(0.5);
    expect(expected).not.toBe(1);
    expect(expected).not.toBe(2);
    expect(expected).toBe(5);
  });
});

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