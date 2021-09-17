import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error("Could not find .env file");
}

export default {
  port: parseInt(process.env.PORT, 10),
  api: {
    prefix: "/api",
  },
  databaseURL: process.env.MONGO_URI,
  bestBuyKey: process.env.BEST_BUY_API_KEY,
};
