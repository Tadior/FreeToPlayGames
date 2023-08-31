import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gameApi } from '@/shared/api/gameApi';
import { mainPageReducer } from '@/pages/MainPage/model/slices/MainPageSlice';

const rootReducer = combineReducers({
  [gameApi.reducerPath]: gameApi.reducer,
  games: mainPageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gameApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
