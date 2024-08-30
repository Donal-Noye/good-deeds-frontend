import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserBody} from "@/services/users/users.types";
import {deleteUser, fetchUserById, fetchUserByTag, fetchUsers, updateUser} from "@/store/users/users.actions";

export interface UsersState {
	users: IUserBody[];
	user: IUserBody | null;
	loading: boolean;
	error: string | null;
}

const initialState: UsersState = {
	users: [],
	user: null,
	loading: false,
	error: null,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// Fetch all users
			.addCase(fetchUsers.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch users';
			})
			// Fetch user by tag
			.addCase(fetchUserByTag.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUserByTag.fulfilled, (state, action: PayloadAction<IUserBody>) => {
				state.user = action.payload;
				state.loading = false;
				state.users = [action.payload];
			})
			.addCase(fetchUserByTag.rejected, (state, action) => {
				state.error = action.payload as string;
				state.loading = false;
			})
			// Fetch user by id
			.addCase(fetchUserById.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUserById.fulfilled, (state, action: PayloadAction<IUserBody>) => {
				state.user = action.payload;
				state.loading = false;
				state.users = [action.payload];
			})
			.addCase(fetchUserById.rejected, (state, action) => {
				state.error = action.payload as string;
				state.loading = false;
			})
			// Update user
			.addCase(updateUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateUser.fulfilled, (state, action: PayloadAction<IUserBody>) => {
				state.loading = false;
				state.user = action.payload;
				const index = state.users.findIndex(user => user.id === action.payload.id);
				if (index !== -1) {
					state.users[index] = action.payload;
				}
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to update user';
			})
			// Delete user
			.addCase(deleteUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deleteUser.fulfilled, (state, action: PayloadAction<string>) => {
				state.loading = false;
				state.users = state.users.filter(user => user.id !== action.payload);
			})
			.addCase(deleteUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to delete user';
			});
	},
});

export default usersSlice.reducer;
