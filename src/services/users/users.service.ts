import { IUserBody } from '@/services/users/users.types';
import { instance } from '@/api/axios';

class AuthService {
  private _BASE_URL = '/users';

  async fetchGetAll() {
    return instance.get<IUserBody[]>(`${this._BASE_URL}/all`);
  }

  async fetchGetByTag(tag: string) {
    return instance.get<IUserBody>(`${this._BASE_URL}/${tag}/find`);
  }

  async fetchGetById(id: string) {
    return instance.get<IUserBody>(`${this._BASE_URL}/${id}/find`);
  }

  async fetchUpdate(id: string, body: IUserBody) {
    return instance.put<IUserBody>(`${this._BASE_URL}/${id}/update`, body);
  }

  async fetchDelete(id: string) {
    return instance.delete<IUserBody>(`${this._BASE_URL}/${id}/delete`);
  }
}

export default new AuthService();
