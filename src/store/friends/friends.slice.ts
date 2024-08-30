import { createSlice } from '@reduxjs/toolkit';
import {addFriend, fetchAllFriends, getById} from '@/store/friends/friends.actions';
import {IFriendBody} from "@/store/friends/friends.types";

interface FriendsState {
  friends: IFriendBody[];
	friend: IFriendBody | null;
	loading: boolean;
  error: string | null;
}

const initialState: FriendsState = {
  friends: [],
	friend: null,
  loading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFriend.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addFriend.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addFriend.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
	    .addCase(getById.pending, (state) => {
		    state.loading = true;
		    state.error = null;
	    })
	    .addCase(getById.fulfilled, (state, action) => {
		    state.friend = action.payload;
		    state.loading = false;
	    })
	    .addCase(getById.rejected, (state, action) => {
		    state.error = action.payload as string;
		    state.loading = false;
	    })
      .addCase(fetchAllFriends.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllFriends.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch friends';
        state.loading = false;
      });
  },
});

export default friendsSlice.reducer;
