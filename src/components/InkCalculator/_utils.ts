export enum Wall {
  wallA1 = 'A1',
  wallA2 = 'A2',
  wallB1 = 'B1',
  wallB2 = 'B2',
}

export type WallComputation = {
  wall: { width: number, height: number };
  doors: number;
  windows: number;
};

export const initialState = {
  A1: { wall: { width: 1, height: 1 }, doors: 0, windows: 0 },
  A2: { wall: { width: 1, height: 1 }, doors: 0, windows: 0 },
  B1: { wall: { width: 1, height: 1 }, doors: 0, windows: 0 },
  B2: { wall: { width: 1, height: 1 }, doors: 0, windows: 0 },
};
