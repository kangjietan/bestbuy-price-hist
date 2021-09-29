import Item from "../models/item";
import { fetchProduct } from "../bestbuyapi";
import { addPriceRecord } from "./price";
import { Item as ItemInterface } from "../interfaces";
import mongoose from "mongoose";

interface ItemRecord extends ItemInterface {
  _id: mongoose.Types.ObjectId;
}

interface ItemPriceUpdate {
  currentPrice: number;
  priceUpdatedAt: Date;
}

interface PriceUpdateLow extends ItemPriceUpdate {
  historicalLowPrice: number;
  historicalLowPriceDate: Date;
}
interface PriceUpdateHigh extends ItemPriceUpdate {
  historicalHighPrice: number;
  historicalHighPriceDate: Date;
}

type PriceUpdateHistorical = PriceUpdateLow | PriceUpdateHigh;

/**
 * Add item to database if sku already does not exist.
 * Fetch prices and create document in prices collection as well.
 * @param sku Product sku
 */
export const addItem = async (sku: number) => {
  try {
    const itemRecord = await Item.create({
      sku,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const productInfo = await fetchProduct(sku);
    const { salePrice, priceUpdateDate } = productInfo;

    const recordUpdatedWithPrices = {
      currentPrice: salePrice,
      priceUpdatedAt: priceUpdateDate,
      historicalLowPrice: salePrice,
      historicalLowPriceDate: priceUpdateDate,
      historicalHighPrice: salePrice,
      historicalHighPriceDate: priceUpdateDate,
    };
    Object.assign(itemRecord, recordUpdatedWithPrices);
    itemRecord.save();

    await addPriceRecord(sku, {
      itemSku: sku,
      price: salePrice,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (error) {
    console.log("Failed to insert");
    console.log(error);
  }
};

export const fetchAllItems = async () => {
  try {
    const allItems: ItemRecord[] = await Item.find({});
    return allItems;
  } catch (error) {
    console.log(error);
  }
};

export const updateItemCurrentPrice = async (
  sku: number,
  data: ItemPriceUpdate
) => {
  try {
    await Item.updateOne({ sku }, data);
  } catch (error) {
    console.log(error);
  }
};

export const updateItemHistoricals = async (
  sku: number,
  data: PriceUpdateHistorical
) => {
  try {
    await Item.updateOne({ sku }, data);
  } catch (error) {
    console.log(error);
  }
};
