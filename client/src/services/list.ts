import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../interfaces";

export const listApi = createApi({
  reducerPath: "listApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    fetchAllItems: builder.query<Item[], void>({
      query: () => `item/list`,
    }),
  }),
});

export const { useFetchAllItemsQuery } = listApi;
