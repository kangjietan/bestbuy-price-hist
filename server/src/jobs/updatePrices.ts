import cron from "node-cron";
import {
  fetchAllItems,
  updateItemHistoricals,
  updateItemCurrentPrice,
} from "../services/item";
import { addPriceRecord } from "../services/price";
import { fetchProduct } from "../bestbuyapi";
import { Item as ItemInterface } from "../interfaces";

const updateItemPrices = async () => {
  const updatePricesTask = cron.schedule("0 */1 * * *", async () => {
    console.log(`Running every hour. ${new Date()}`);
    fetchItemsAndUpdate();
  });

  await updatePricesTask.start();

  return updatePricesTask;
};

export const fetchItemsAndUpdate = async () => {
  try {
    const items = await fetchAllItems();

    for (let i = 0; i < items.length; i++) {
      comparePricesAndUpdate(items[i]);
    }
  } catch (error) {
    console.log(error);
  }
};

export const comparePricesAndUpdate = async (item: ItemInterface) => {
  try {
    const {
      currentPrice,
      priceUpdatedAt,
      sku,
      historicalLowPrice,
      historicalHighPrice,
    } = item;

    const productInfo = await fetchProduct(sku);
    const { salePrice, priceUpdateDate } = productInfo;

    if (salePrice === currentPrice) return;

    const priceRecord = await addPriceRecord(sku, {
      itemSku: sku,
      price: salePrice,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    /**
     * Update historical lows and highs if the current retrieved price is:
     * Lower than historicalLow
     * Higher than historicalHigh
     */

    if (salePrice < historicalLowPrice) {
      await updateItemHistoricals(sku, {
        historicalLowPrice: salePrice,
        historicalLowPriceDate: new Date(priceUpdateDate),
        currentPrice: salePrice,
        priceUpdatedAt: new Date(priceUpdateDate),
        updatedAt: new Date(),
      });

      return priceRecord;
    }

    if (salePrice > historicalHighPrice) {
      await updateItemHistoricals(sku, {
        historicalHighPrice: salePrice,
        historicalHighPriceDate: new Date(priceUpdateDate),
        currentPrice: salePrice,
        priceUpdatedAt: new Date(priceUpdateDate),
        updatedAt: new Date(),
      });

      return priceRecord;
    }

    await updateItemCurrentPrice(sku, {
      currentPrice: salePrice,
      priceUpdatedAt: new Date(priceUpdateDate),
      updatedAt: new Date(),
    });

    return priceRecord;
  } catch (error) {
    console.log(error);
  }
};

export default updateItemPrices;
