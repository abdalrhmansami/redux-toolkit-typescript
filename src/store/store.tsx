import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { gamesApi } from "../services/gamesApi";

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});
