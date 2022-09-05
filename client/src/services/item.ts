import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item, Price } from "../interfaces";

export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/item/" }),
  endpoints: (builder) => ({
    fetchAllItems: builder.query<Item[], void>({
      query: () => `list`,
      keepUnusedDataFor: 3600,
    }),
    fetchAllItemPrices: builder.query<Price[], number>({
      query: (sku) => `prices/${sku}`,
      keepUnusedDataFor: 3600,
    }),
  }),
});

export const { useFetchAllItemsQuery, useFetchAllItemPricesQuery } = itemApi;
