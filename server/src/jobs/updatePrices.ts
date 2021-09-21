import cron from "node-cron";
import { RateLimiter } from "limiter";
import { fetchAllItems, updateItemHistoricals } from "../services/item";
import { addPriceRecord } from "../services/price";
import { getProduct } from "../bestbuyapi";
import { Item as ItemInterface } from "../interfaces";

export default async function updateItemPrices() {
  const updatePricesTask = cron.schedule("0 */1 * * *", async () => {
    console.log(`Running every hour. ${new Date()}`);
    fetchItemsAndUpdate();
  });

  await updatePricesTask.start();

  return updatePricesTask;
}

async function fetchItemsAndUpdate() {
  const limiter = new RateLimiter({
    tokensPerInterval: 4,
    interval: "second",
  });

  const items = await fetchAllItems();

  for (let i = 0; i < items.length; i++) {
    const remainingRequests = await limiter.removeTokens(1);
    comparePricesAndUpdate(items[i]);
  }
}

async function comparePricesAndUpdate(item: ItemInterface) {
  const {
    currentPrice,
    priceUpdatedAt,
    sku,
    historicalLowPrice,
    historicalHighPrice,
  } = item;

  const productInfo = await getProduct(sku);
  const { salePrice, priceUpdateDate } = productInfo;

  if (
    salePrice === currentPrice ||
    priceUpdatedAt.getTime() === new Date(priceUpdateDate).getTime()
  )
    return;

  const priceRecord = await addPriceRecord({
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

  if (historicalLowPrice < salePrice) {
    updateItemHistoricals(sku, {
      historicalLowPrice: salePrice,
      historicalLowPriceDate: new Date(priceUpdateDate),
    });
  }

  if (historicalHighPrice > salePrice) {
    updateItemHistoricals(sku, {
      historicalHighPrice: salePrice,
      historicalHighPriceDate: new Date(priceUpdateDate),
    });
  }

  return priceRecord;
}
