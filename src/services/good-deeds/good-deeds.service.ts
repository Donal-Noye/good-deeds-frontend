import {instance} from "@/api/axios";
import {IGoodDeedBody, IGoodDeedResponse} from "@/services/good-deeds/good-deeds.types";

class GoodDeedsService {
	private _BASE_URL = '/good-deeds';

	async fetchGetAll() {
		return instance.get<IGoodDeedResponse[]>(`${this._BASE_URL}/all`);
	}

	async fetchCreate(data: IGoodDeedBody) {
		return instance.post<IGoodDeedResponse>(`${this._BASE_URL}/create`, data);
	}

	async fetchUpdate(data: IGoodDeedBody, id: string) {
		return instance.put<IGoodDeedResponse>(`${this._BASE_URL}/${id}/update`, data);
	}

	async fetchDelete(id: string) {
		return instance.delete<IGoodDeedResponse>(`${this._BASE_URL}/${id}/delete`);
	}
}

export default new GoodDeedsService();
