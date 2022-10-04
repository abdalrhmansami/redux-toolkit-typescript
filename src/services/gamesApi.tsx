import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../models/game.model";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    games: builder.query<Game[], void>({
      query: () => `/games`,
    }),
    game: builder.query<Game, string>({
      query: (id) => `/games/${id}`,
    }),
  }),
});

export const { useGamesQuery, useGameQuery } = gamesApi;
