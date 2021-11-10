import ApiInterface, { Ink } from './ApiInterface';

const db: Ink[] = [
  {
    id: 'id1',
    createdAt: new Date().getMilliseconds(),
    canSize: 0.5,
    'wall-a': {
      doors: 1, windows: 0, height: 3, width: 10,
    },
    'wall-b': {
      doors: 1, windows: 0, height: 3, width: 10,
    },
    'wall-c': {
      doors: 1, windows: 0, height: 3, width: 10,
    },
    'wall-d': {
      doors: 1, windows: 0, height: 3, width: 10,
    },
  },
  {
    id: 'id2',
    createdAt: new Date().getMilliseconds(),
    canSize: 0.5,
    'wall-a': {
      doors: 2, windows: 0, height: 5, width: 4,
    },
    'wall-b': {
      doors: 2, windows: 0, height: 5, width: 4,
    },
    'wall-c': {
      doors: 2, windows: 0, height: 5, width: 4,
    },
    'wall-d': {
      doors: 2, windows: 0, height: 5, width: 4,
    },
  },
];

class LocalAPI implements ApiInterface {
  async createInk(ink: Ink) {
    const newInk = { ...ink, id: new Date().getTime().toString() };
    db.push(newInk);
    return { message: 'ok', data: newInk };
  }

  async getInkById(id: string) {
    const index = db.findIndex((item) => item.id === id);
    return { message: 'ok', data: db[index] };
  }

  async getAllInks() {
    return { message: 'ok', data: db };
  }

  async editInkById(id: string, editInk: Ink) {
    const index = db.findIndex((item) => item.id === id);
    db[index] = editInk;
    return { message: 'ok', data: db[index] };
  }

  async deleteInkById(id: string) {
    const index = db.findIndex((item) => item.id === id);
    const cpy = { ...db[index] };
    delete db[index];
    return { message: 'ok', data: cpy };
  }

  async login(email: string, password: string) {
    console.log(email, password);
    return { message: 'ok', token: 'tokenreceived' };
  }
}

export default LocalAPI;
