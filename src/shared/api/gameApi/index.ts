import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { Game } from '@/entities/Game';
import { BASE_URL } from '@/shared/consts/baseUrl';

export const gameApi = createApi({
  reducerPath: 'gameApi',
  tagTypes: ['Games'],
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: BASE_URL,
      headers: [
        [
          'X-RapidAPI-Key',
          '7917b2d80bmshc1a4dc128b02bf0p19547djsn29d38d9f8a9a',
        ],
      ],
    }),
    { maxRetries: 3 },
  ),
  endpoints: (builder) => ({
    // getGames: builder.query<Game[], Partial<{category: string; ['sort-by']: string}>>({
    getGames: builder.query<Game[], { category: string; ['sort-by']: string }>({
      query: (arg) => {
        let params = {};

        if (arg.category) {
          params = { ...params, category: arg.category };
        }

        if (arg['sort-by']) {
          params = { ...params, ['sort-by']: arg['sort-by'] };
        }
        return {
          url: '/games',
          params,
        };
      },
      providesTags: (result) => ['Games'],
    }),
    getGameById: builder.query<GameDetail, 'string'>({
      query: (id) => `game?id=${id}`,
    }),
  }),
});

export const { useGetGamesQuery, useGetGameByIdQuery } = gameApi;
