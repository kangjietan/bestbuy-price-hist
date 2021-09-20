import Price from "../models/price";
import { getProduct } from "../bestbuyapi";

interface PriceRecord {
  itemSku: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export const addPriceRecord = async (sku, data?: PriceRecord) => {
  if (data) {
    await Price.create(data);
  } else {
    const productInfo = await getProduct(sku);
    const { regularPrice, priceUpdateDate } = productInfo;

    const priceRecord = Price.create({
      itemSku: sku,
      price: regularPrice,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
};
