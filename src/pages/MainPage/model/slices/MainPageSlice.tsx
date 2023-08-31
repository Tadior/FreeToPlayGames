import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '@/entities/Game';

interface MainPageState {
  games: Game[];
}

const initialState: MainPageState = {
  games: [],
};

const MainPageSlice = createSlice({
  name: 'mainPageSlice',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action?.payload;
    },
  },
});

export const { reducer: mainPageReducer, actions: mainPageActions } =
  MainPageSlice;
