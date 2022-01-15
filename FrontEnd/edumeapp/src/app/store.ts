import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import phoneReducer from '../features/PhoneScreen/PhoneReducer';
//This is where the Store for the reducers are created

export interface IAction {
  type: string;
  payload?: any;
}

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
