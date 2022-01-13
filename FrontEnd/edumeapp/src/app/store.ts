import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import numberReducer from '../features/PhoneScreen/numberSlice';
import conversionService from '../services/conversion.service';
//This is where the Store for the reducers are created

export interface IAction {
  type: string;
  payload?: any;
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    number: numberReducer,
    // wordList: wordListReducer
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
