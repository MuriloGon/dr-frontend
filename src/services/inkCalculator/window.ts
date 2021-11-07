import { Window } from './_utils';

export function totalArea(windows: Window[]) {
  return windows.reduce((acc, window) => acc + (window.width * window.height), 0);
}
