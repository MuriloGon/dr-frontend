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
