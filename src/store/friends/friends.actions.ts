import { createAsyncThunk } from '@reduxjs/toolkit';
import FriendsService from '@/services/friends/friends.service';
import { IFriendBody } from '@/store/friends/friends.types';

export const addFriend = createAsyncThunk<void, string>(
  'friends/addFriend',
  async (tag: string, { rejectWithValue }) => {
    try {
      await FriendsService.fetchAdd(tag);
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  },
);

export const getById = createAsyncThunk<IFriendBody, string>(
	'friends/getById',
	async (friendId: string, { rejectWithValue }) => {
		try {
			const response = await FriendsService.fetchGetById(friendId);
			return response.data;
		} catch (error: any) {
			if (error.response && error.response.data) {
				return rejectWithValue(error.response.data.message);
			}
			return rejectWithValue('An unexpected error occurred');
		}
	}
);

export const fetchAllFriends = createAsyncThunk<IFriendBody[]>(
  'friends/fetchAll',
  async (_, { rejectWithValue }) => {
		try {
			const response = await FriendsService.fetchAll();
			return response.data;
		} catch (error: any) {
		  if (!error.response) {
			  throw error
		  }
		  return rejectWithValue(error.response.data)
	  }
  },
);


