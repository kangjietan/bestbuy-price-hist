import axios from "axios";
import config from "../config";
import { BestBuyProduct as BestBuyProductInterface } from "../interfaces";

const productsBaseUrl = "https://api.bestbuy.com/v1/products";
const apiKey = config.bestBuyKey;
const responseFormat = "&format=json";

export const getProduct = async (sku) => {
  const getProductsUrl = `${productsBaseUrl}(sku=${sku})?apiKey=${apiKey}${responseFormat}`;
  try {
    const response = await axios.get(getProductsUrl);
    const products: BestBuyProductInterface[] = response.data.products;

    for (let i = 0; i < products.length; i++) {
      if (products[i].sku === sku) return products[i];
    }
  } catch (error) {
    console.log(error);
  }
};
