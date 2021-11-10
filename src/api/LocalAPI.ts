import ApiInterface, { Ink } from './ApiInterface';

const db: Ink[] = [
  {
    _id: 'id1',
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
    _id: 'id1',
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
  async getInkById(id: string) {
    const index = db.findIndex((item) => item._id === id);
    return { message: 'ok', data: db[index] };
  }

  async getAllInks() {
    return { message: 'ok', data: db };
  }

  async editInkById(editInk: Ink) {
    const index = db.findIndex((item) => item._id === editInk._id);
    db[index] = editInk;
    return { message: 'ok', data: db[index] };
  }

  async deleteInkById(id: string) {
    const index = db.findIndex((item) => item._id === id);
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
