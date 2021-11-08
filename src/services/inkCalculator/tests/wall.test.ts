import * as wall from '../wall';
import { Wall } from '../_utils';

describe('wall module', () => {
  test('area() - comute wall area', () => {
    const mockWall: Wall = {
      height: 2,
      width: 1.5,
    };
    const totalArea = wall.area(mockWall);
    expect(totalArea).toEqual(3);
    expect(totalArea).not.toEqual(0);
  });
});
