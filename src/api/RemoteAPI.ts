import axios from 'axios';
import ApiInterface, { Ink } from './ApiInterface';

const endpoint = 'http://localhost:3030';

// {
//   url: `${endpoint}/inks/${id}`,
//   method: 'GET',
//   responseType: Ink,
// }

class LocalAPI implements ApiInterface {
  async createInk(ink: Ink) {
    const res = await axios
      .post<{ message: string, data: Ink }>(`${endpoint}/inks/`, {
      ...ink,
    });
    return { message: 'ok', data: res.data.data };
  }

  async getInkById(id: string) {
    const res = await axios.get<{ message: string, data: Ink }>(`${endpoint}/inks/${id}`);

    return { message: 'ok', data: res.data.data };
  }

  async getAllInks() {
    const res = await axios.get<{ message: string, data: Ink[] }>(`${endpoint}/inks/`);
    console.log(res);
    return { message: 'ok', data: res.data.data };
  }

  async editInkById(id: string, editInk: Ink, token: string) {
    const res = await axios.put<{ message: string, data: Ink }>(`${endpoint}/inks/${id}`, editInk, {
      headers: {
        authorization: token,
      },
    });

    return { message: 'ok', data: res.data.data };
  }

  async deleteInkById(id: string, token: string) {
    const res = await axios.delete<{ message: string, data: Ink }>(`${endpoint}/inks/${id}`, {
      headers: {
        authorization: token,
      },
    });

    return { message: 'ok', data: res.data.data };
  }

  async login(email: string, password: string) {
    const res = await axios
      .post<{ message: string, token: string }>(`${endpoint}/login/`, {
      email, password,
    });

    return { message: 'ok', token: res.data.token };
  }
}

export default LocalAPI;
