import Item from "../models/item";
import { getProduct } from "../bestbuyapi";
import { addPriceRecord } from "./price";
import { Item as ItemInterface } from "../interfaces";
import mongoose from "mongoose";

interface ItemRecord extends ItemInterface {
  _id: mongoose.Types.ObjectId;
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
    const { regularPrice, priceUpdateDate } = productInfo;
    const recordUpdatedWithPrices = {
      currentPrice: regularPrice,
      priceUpdatedAt: priceUpdateDate,
      historicalLowPrice: regularPrice,
      historicalLowPriceDate: priceUpdateDate,
      historicalHighPrice: regularPrice,
      historicalHighPriceDate: priceUpdateDate,
    };

    Object.assign(itemRecord, recordUpdatedWithPrices);
    itemRecord.save();

    addPriceRecord(sku, {
      itemSku: sku,
      price: regularPrice,
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
