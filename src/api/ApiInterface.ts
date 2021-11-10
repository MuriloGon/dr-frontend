enum CanSize {
  '0.5L' = 0.5,
  '2.5L' = 2.5,
  '3.6L' = 3.6,
  '18L' = 18,
}

export type Wall = {
  width: number;
  height: number;
  doors: number;
  windows: number;
};
export type Ink = {
  'id'?: string
  'createdAt': number;
  'canSize': CanSize
  'wall-a': Wall;
  'wall-b': Wall;
  'wall-c': Wall;
  'wall-d': Wall;
};

export default interface ApiInterface {
  getInkById: (id: string) => Promise<{ message: string, data?: Ink }>;
  getAllInks: () => Promise<{ message: string, data?: Ink[] }>;
  createInk: (ink: Ink) => Promise<{ message: string, data: Ink }>;
  editInkById: (
    id: string, editInk: Ink, token: string) => Promise<{ message: string, data?: Ink }>;
  deleteInkById: (id: string, token: string) => Promise<{ message: string, data?: Ink }>;
  login: (email: string, password: string) => Promise<{ message: string, token: string }>;
}
