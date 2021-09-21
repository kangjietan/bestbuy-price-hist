import Item from "../models/item";
import { getProduct } from "../bestbuyapi";
import { addPriceRecord } from "./price";
import { Item as ItemInterface } from "../interfaces";
import mongoose from "mongoose";

interface ItemRecord extends ItemInterface {
  _id: mongoose.Types.ObjectId;
}

interface PriceUpdate {
  historicalLowPrice?: number;
  historicalLowPriceDate?: Date;
  historicalHighPrice?: number;
  historicalHighPriceDate?: Date;
}

/**
 * Add item to database if sku already does not exist.
 * Fetch prices and create document in prices collection as well.
 * @param sku Product sku
 */
export const addItem = async (sku) => {
  try {
    const itemRecord = await Item.create({
      sku,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const productInfo = await getProduct(sku);
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

    addPriceRecord(sku, {
      itemSku: sku,
      price: salePrice,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log("Inserted Item");
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

export const updateItemHistoricals = async (sku: number, data: PriceUpdate) => {
  await Item.updateOne({ sku }, data);
};
