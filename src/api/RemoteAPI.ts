import axios from 'axios';
import ApiInterface, { Ink } from './ApiInterface';

const endpoint = 'http://localhost:3030';

// {
//   url: `${endpoint}/inks/${id}`,
//   method: 'GET',
//   responseType: Ink,
// }

class LocalAPI implements ApiInterface {
  async getInkById(id: string) {
    const res = await axios.get<Ink>(`${endpoint}/inks/${id}`);

    return { message: 'ok', data: res.data };
  }

  async getAllInks() {
    const res = await axios.get<Ink[]>(`${endpoint}/inks/`);
    return { message: 'ok', data: res.data };
  }

  async editInkById(id: string, editInk: Ink, token: string) {
    const res = await axios.put<Ink>(`${endpoint}/inks/${id}`, editInk, {
      headers: {
        authorization: token,
      },
    });

    return { message: 'ok', data: res.data };
  }

  async deleteInkById(id: string, token: string) {
    const res = await axios.delete<Ink>(`${endpoint}/inks/${id}`, {
      headers: {
        authorization: token,
      },
    });

    return { message: 'ok', data: res.data };
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
