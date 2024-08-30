import UsersService from "@/services/users/users.service";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUserBody} from "@/services/users/users.types";
import AuthService from "@/services/users/users.service";

export const fetchUsers = createAsyncThunk<IUserBody[]>(
	'users/fetchUsers',
	async () => {
		const response = await AuthService.fetchGetAll();
		return response.data;
	}
);

export const fetchUserByTag = createAsyncThunk<IUserBody, string>(
	'users/fetchUserByTag',
	async (tag: string, { rejectWithValue }) => {
		try {
			const response = await UsersService.fetchGetByTag(tag);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchUserById = createAsyncThunk<IUserBody, string>(
	'users/fetchUserById',
	async (id: string, { rejectWithValue }) => {
		try {
			const response = await UsersService.fetchGetById(id);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const updateUser = createAsyncThunk<
	IUserBody,
	{ id: string; body: Partial<IUserBody> }
>('users/updateUser', async ({ id, body }) => {
	const { tag, ...updateData } = body;

	const response = await UsersService.fetchUpdate(id, updateData);
	return response.data;
});

export const deleteUser = createAsyncThunk(
	'users/deleteUser',
	async (id: string, { rejectWithValue }) => {
		try {
			await UsersService.fetchDelete(id);
			return id;
		} catch (error: any) {
			return rejectWithValue(error.response?.data || error.message);
		}
	}
);