import * as doorMod from './door';
import * as windowMod from './window';
import * as wallMod from './wall';
import { Door, Window, Wall } from './_utils';

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

/* Validations */
function validateAreaCovered(wall: Wall, doors: Door[], windows: Window[], maxCoverage = 0.5) {
  const wallArea = wallMod.area(wall);
  const doorsArea = doorMod.totalArea(doors);
  const windowsArea = windowMod.totalArea(windows);
  const coverage = (doorsArea + windowsArea) / wallArea;
  if (coverage >= maxCoverage) {
    const message = `Cobertura máxima de ${(maxCoverage * 100).toFixed(2)} alcançada`;
    return { valid: false, message };
  }
  return { valid: true };
}

export function validateWallDimensions(wall: Wall) {
  const heightValidation = wall.height < 1 || wall.height > 15;
  const widthValidation = wall.width < 1 || wall.width > 15;
  if (heightValidation || widthValidation) {
    const message = 'A wall must have at least 1 and at most 15';
    return { valid: false, message };
  }
  return { valid: true };
}

/* Ink computation */

export function totalInk(wall: Wall, doors: Door[] = [], windows: Window[], yield_ = 5) {
  const totalArea = wallMod.area(wall);
  const doorsArea = doorMod.totalArea(doors);
  const windowsArea = windowMod.totalArea(windows);

  const utilArea = totalArea - (doorsArea + windowsArea);
  const inkVolume = utilArea / yield_;

  return inkVolume;
}

export default {
  wallLimits,
  areaCovered: validateAreaCovered,
  totalInk,
};
