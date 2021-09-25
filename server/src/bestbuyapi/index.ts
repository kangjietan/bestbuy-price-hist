import axios from "axios";
import config from "../config";
import { RateLimiter } from "limiter";
import { BestBuyProduct as BestBuyProductInterface } from "../interfaces";

const productsBaseUrl = "https://api.bestbuy.com/v1/products";
const apiKey = config.bestBuyKey;
const responseFormat = "&format=json";

const limiter = new RateLimiter({
  tokensPerInterval: 2,
  interval: "second",
});

export const getProduct = async (sku: number) => {
  const getProductsUrl = `${productsBaseUrl}(sku=${sku})?apiKey=${apiKey}${responseFormat}`;
  try {
    const remainingRequests = await limiter.removeTokens(1);

    const response = await axios.get(getProductsUrl);
    const products: BestBuyProductInterface[] = response.data.products;

    for (let i = 0; i < products.length; i++) {
      if (products[i].sku === sku) return products[i];
    }
  } catch (error) {
    console.log(error);
  }
};
