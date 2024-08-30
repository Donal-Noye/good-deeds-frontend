import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import profileReducer from './auth/profile.slice';
import goodDeedsReducer from './good-deeds/good-deeds.slice';
import usersReducer from './users/users.slice';
import friendsReducer from './friends/friends.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    goodDeeds: goodDeedsReducer,
    users: usersReducer,
    friends: friendsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
