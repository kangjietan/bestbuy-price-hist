import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BestBuyProduct } from "../interfaces";

export const bestBuyApi = createApi({
  reducerPath: "bestBuyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/bestbuy/" }),
  endpoints: (builder) => ({
    fetchBestBuyProductInfo: builder.query<BestBuyProduct, number>({
      query: (sku) => `product/${sku}`,
    }),
  }),
});

export const { useFetchBestBuyProductInfoQuery } = bestBuyApi;
