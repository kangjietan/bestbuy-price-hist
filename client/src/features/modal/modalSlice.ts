import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BestBuyProduct } from "../../interfaces";

export interface ModalState {
  selectedProduct: BestBuyProduct | {};
}

const initialState: ModalState = {
  selectedProduct: {},
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCurrentProduct: (state, action: PayloadAction<BestBuyProduct>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setCurrentProduct } = ModalSlice.actions;

export default ModalSlice.reducer;
