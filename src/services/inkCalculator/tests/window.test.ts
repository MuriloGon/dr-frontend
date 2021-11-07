import { Window } from '../_utils';
import * as window from '../window';

describe('window module', () => {
  test('totalArea() - compute window areas from an array of windows', () => {
    const mockWindows: Window[] = [
      { height: 2, width: 1 }, { height: 1, width: 1 },
      { height: 1, width: 2 }, { height: 2, width: 1.5 },
    ];
    const totalArea = window.totalArea(mockWindows);
    expect(totalArea).toEqual(8);
    expect(totalArea).not.toEqual(0);
  });
});
