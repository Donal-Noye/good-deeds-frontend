import { instance } from '@/api/axios';
import {IFriendBody} from "@/services/friends/friends.types";

class FriendsService {
  private _BASE_URL = '/friends';

  async fetchAdd(tag: string) {
		return instance.post(`${this._BASE_URL}/add`, { tag });
  }

  async fetchGetById(friendId: string): Promise<any> {
		return instance.get<IFriendBody>(`${this._BASE_URL}/${friendId}/find`);
  }

  async fetchAll() {
    return instance.get<IFriendBody[]>(`${this._BASE_URL}/all`);
  }
}

export default new FriendsService();
