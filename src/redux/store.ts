import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
