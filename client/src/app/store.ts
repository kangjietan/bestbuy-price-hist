import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import { listApi } from "../services/list";

const extraMiddleware = [listApi.middleware];

const developmentMiddleware = [logger];
process.env.NODE_ENV !== "production" &&
  extraMiddleware.push(...developmentMiddleware);

export const store = configureStore({
  reducer: {
    [listApi.reducerPath]: listApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(extraMiddleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
