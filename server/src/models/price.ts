import { Price as PriceInterface } from "../interfaces";
import mongoose from "mongoose";

const Price = new mongoose.Schema({
  itemSku: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  deletedAt: {
    type: Date,
  },
});

export default mongoose.model<PriceInterface & mongoose.Document>(
  "Price",
  Price
);
