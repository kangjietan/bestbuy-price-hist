import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import listReducer from "../features/list/listSlice";
import modalReducer from "../features/modal/modalSlice";
import { itemApi } from "../services/item";
import { bestBuyApi } from "../services/bestBuy";

const extraMiddleware = [itemApi.middleware, bestBuyApi.middleware];

const developmentMiddleware = [logger];
process.env.NODE_ENV !== "production" &&
  extraMiddleware.push(...developmentMiddleware);

export const store = configureStore({
  reducer: {
    list: listReducer,
    modal: modalReducer,
    [itemApi.reducerPath]: itemApi.reducer,
    [bestBuyApi.reducerPath]: bestBuyApi.reducer,
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
