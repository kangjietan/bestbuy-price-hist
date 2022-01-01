import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../interfaces";

export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/item/" }),
  endpoints: (builder) => ({
    fetchAllItems: builder.query<Item[], void>({
      query: () => `list`,
    }),
  }),
});

export const { useFetchAllItemsQuery } = itemApi;
