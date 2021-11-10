import * as doorMod from './door';
import * as windowMod from './window';
import * as wallMod from './wall';
import { Door, Window, Wall } from './_utils';

/* WALLS LIMITS */
export function minWallHeight(doors: Door[], windows: Window[]) {
  return Math.max(
    ...doors.map(({ height }) => height),
    ...windows.map(({ height }) => height),
  );
}

export function minWallWidth(doors: Door[], windows: Window[]) {
  return Math.max(
    ...doors.map(({ width }) => width),
    ...windows.map(({ width }) => width),
  );
}

export function wallLimits(doors: Door[], windows: Window[], offset = 0.3) {
  const hasDoors = doors.length > 0;

  const minHeight: number = minWallHeight(doors, windows);

  const width = { min: 1, max: 15 };
  const height = { min: (hasDoors ? (minHeight + offset) : 1), max: 15 };

  return { width, height };
}

/* Validations */
export function validateAreaCovered(
  wall: Wall, doors: Door[], windows: Window[], maxCoverage = 0.5,
) {
  const wallArea = wallMod.area(wall);
  const doorsArea = doorMod.totalArea(doors);
  const windowsArea = windowMod.totalArea(windows);
  const coverage = (doorsArea + windowsArea) / wallArea;
  if (coverage >= maxCoverage) {
    const message = `Cobertura máxima de área (${(maxCoverage * 100).toFixed(2)}%) alcançada - `
      + `atualmente: ${(coverage * 100).toFixed(2)}% de 100%`;
    return { valid: false, message };
  }
  return { valid: true };
}

export function minimumWallHeight(height: number, doors: Door[], windows: Window[], offset = 0.3) {
  const minHeight = minWallHeight(doors, windows) + offset;
  if (height < minHeight) {
    const message = `A parede deve ter, pelo menos, ${minHeight.toFixed(2)}m de altura`;
    return { valid: false, message };
  }
  return { valid: true };
}

export function minimumWallWidth(height: number, doors: Door[], windows: Window[], offset = 0.3) {
  const minWidth = minWallWidth(doors, windows) + offset;
  if (height < minWidth) {
    const message = `A parede deve ter, pelo menos, ${minWidth.toFixed(2)}m de largura`;
    return { valid: false, message };
  }
  return { valid: true };
}

export function validateWallDimensions(wall: Wall) {
  const heightValidation = wall.height < 1 || wall.height > 15;
  const widthValidation = wall.width < 1 || wall.width > 15;
  if (heightValidation || widthValidation) {
    const message = 'A altura ou largura da parede deve ter entre 1m e 15m';
    return { valid: false, message };
  }
  return { valid: true };
}

export function validations(wall: Wall, doors: Door[], windows: Window[]) {
  const validateDims = validateWallDimensions(wall);
  const validateArea = validateAreaCovered(wall, doors, windows);
  const validateMinHeight = minimumWallHeight(wall.height, doors, windows);
  const validateMinWidth = minimumWallWidth(wall.width, doors, windows);
  return [validateDims, validateArea, validateMinHeight, validateMinWidth];
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

export function calcMinimumInkCans(value: number, sizes: Array<number>) {
  const descSizes = sizes.sort((a, b) => b - a);
  const result: { [key: number]: number } = descSizes
    .reduce((acc, size) => ({ ...acc, [size]: 0 }), {});

  let subValue = value;
  for (let i = 0; i < descSizes.length; i += 1) {
    const a = subValue / descSizes[i];
    if (i !== descSizes.length - 1) {
      result[descSizes[i]] = Math.floor(a);
      subValue -= (Math.floor(a) * descSizes[i]);
    } else {
      result[descSizes[i]] = Math.ceil(a);
      subValue -= (Math.ceil(a) * descSizes[i]);
    }
  }

  return result;
}
