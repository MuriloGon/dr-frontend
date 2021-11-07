import * as doorMod from './door';
import * as windowMod from './window';
import * as wallMod from './wall';
import { Door, Window, Wall } from './_utils';

export function validateWallDimensions(wall: Wall) {
  const heightValidation = wall.height < 1 || wall.height > 15;
  const widthValidation = wall.width < 1 || wall.width > 15;
  if (heightValidation || widthValidation) {
    const errorMessage = 'A wall must have at least 1 and at most 15';
    throw new Error(errorMessage);
  }
  return true;
}

/* WALLS LIMITS */
export function maxObjectsHeight(doors: Door[], windows: Window[]) {
  return Math.max(
    ...doors.map(({ height }) => height),
    ...windows.map(({ height }) => height),
  );
}

export function maxObjectsWidth(doors: Door[], windows: Window[]) {
  return Math.max(
    ...doors.map(({ width }) => width),
    ...windows.map(({ width }) => width),
  );
}

export function wallLimits(doors: Door[], windows: Window[], offset = 0.3) {
  const hasDoors = doors.length > 0;

  const minHeight: number = maxObjectsHeight(doors, windows);

  const width = { min: 1, max: 15 };
  const height = { min: (hasDoors ? (minHeight + offset) : 1), max: 15 };

  return { width, height };
}

export default {
  wallLimits,
};
