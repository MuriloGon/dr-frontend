import { Door } from '../_utils';
import * as door from '../door';

describe('door module', () => {
  test('totalArea() - compute door areas from an array of doors', () => {
    const mockDoors: Door[] = [
      { height: 2, width: 1 }, { height: 1.8, width: 0.5 },
      { height: 2, width: 0.5 }, { height: 2, width: 1 },
    ];
    const totalArea = door.totalArea(mockDoors);
    expect(totalArea).toEqual(5.9);
    expect(totalArea).not.toEqual(0);
  });
});
