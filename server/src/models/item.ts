import { Item as ItemInterface } from "../interfaces";
import mongoose from "mongoose";

const Item = new mongoose.Schema({
  sku: {
    type: Number,
    unique: true,
    required: true,
  },
  currentPrice: {
    type: Number,
  },
  priceUpdatedAt: {
    type: Date,
  },
  historicalLowPrice: {
    type: Number,
  },
  historicalLowPriceDate: {
    type: Date,
  },
  historicalHighPrice: {
    type: Number,
  },
  historicalHighPriceDate: {
    type: Date,
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

export default mongoose.model<ItemInterface & mongoose.Document>("Item", Item);
