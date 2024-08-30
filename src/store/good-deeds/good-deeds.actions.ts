import GoodDeedsService from "@/services/good-deeds/good-deeds.service";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IGoodDeedBody, IGoodDeedResponse} from "@/services/good-deeds/good-deeds.types";
import GoodDeedService from "@/services/good-deeds/good-deeds.service";

export const fetchGoodDeeds = createAsyncThunk<IGoodDeedResponse[]>(
	'goodDeeds/fetchGoodDeeds',
	async () => {
		const response = await GoodDeedService.fetchGetAll();
		return response.data;
	}
);

export const createGoodDeed = createAsyncThunk(
	'goodDeeds/create',
	async (data: IGoodDeedBody, { rejectWithValue }) => {
		try {
			const response = await GoodDeedsService.fetchCreate(data);
			return response.data;
		} catch (error) {
			return rejectWithValue('Failed to create good deed');
		}
	}
);

export const updateGoodDeed = createAsyncThunk(
	'goodDeeds/update',
	async ({ id, data }: { id: string; data: IGoodDeedBody }, { rejectWithValue }) => {
		try {
			const response = await GoodDeedsService.fetchUpdate(data, id);
			return response.data;
		} catch (error) {
			return rejectWithValue('Failed to update good deed');
		}
	}
);

export const deleteGoodDeed = createAsyncThunk(
	'goodDeeds/delete',
	async (id: string, { rejectWithValue }) => {
		try {
			await GoodDeedsService.fetchDelete(id);
			return id;
		} catch (error) {
			return rejectWithValue('Failed to delete good deed');
		}
	}
);