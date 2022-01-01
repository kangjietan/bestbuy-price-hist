import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item, BestBuyProduct } from "../../interfaces";

export interface ListState {
  list: {
    [key: string]: Item;
  };
}

const initialState: ListState = {
  list: {},
};

export const ListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    fetchList: (state, action: PayloadAction<Item[]>) => {
      const dataList: { [key: string]: Item } = {};
      action.payload.forEach((item) => {
        dataList[item.sku] = item;
      });
      state.list = dataList;
    },
    clearList: (state) => {
      state.list = {};
    },
    updateItemInList: (state, action: PayloadAction<BestBuyProduct>) => {
      state.list[action.payload.sku] = Object.assign(
        state.list.sku,
        action.payload
      );
    },
  },
});

export const { fetchList, clearList } = ListSlice.actions;

export default ListSlice.reducer;
