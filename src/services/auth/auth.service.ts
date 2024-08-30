import {IProfileBody, ISignInBody, ISignInResponse, ISignUpBody, ISignUpResponse} from '@/services/auth/auth.types';
import { axiosClassic, instance } from '@/api/axios';

class AuthService {
  private _BASE_URL = '/auth';

  async fetchSignUp(data: ISignUpBody) {
    return axiosClassic.post<ISignUpResponse>(
      `${this._BASE_URL}/sign-up`,
      data,
    );
  }

  async fetchSignIn(data: ISignInBody) {
    return axiosClassic.post<ISignInResponse>(
      `${this._BASE_URL}/sign-in`,
      data,
    );
  }

  async fetchSignOut() {
    return instance.post(`${this._BASE_URL}/sign-out`);
  }

  async fetchProfile() {
    return instance.get<IProfileBody>(`${this._BASE_URL}/profile`);
  }
}

export default new AuthService();
