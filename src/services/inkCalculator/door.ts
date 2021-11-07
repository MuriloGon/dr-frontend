import { Door } from './_utils';

export function totalArea(doors: Door[]) {
  return doors.reduce((acc, door) => acc + (door.width * door.height), 0);
}
