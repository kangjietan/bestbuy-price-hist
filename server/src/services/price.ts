import Price from "../models/price";
import { getProduct } from "../bestbuyapi";

interface PriceRecord {
  itemSku: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export const addPriceRecord = async (sku: number, data?: PriceRecord) => {
  try {
    if (data) {
      const priceRecord = await Price.create(data);
      return priceRecord;
    } else {
      const productInfo = await getProduct(sku);
      const { salePrice } = productInfo;

      const priceRecord = await Price.create({
        itemSku: sku,
        price: salePrice,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return priceRecord;
    }
  } catch (error) {
    console.log(error);
  }
};
