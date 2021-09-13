import {configureStore, ThunkAction, Action, createStore} from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import {reducer} from "../reducer";

export const store = createStore(reducer)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
