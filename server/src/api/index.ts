import { Router } from "express";
import bestbuy from "./routes/bestbuy";
import item from "./routes/item";

export default () => {
  const app = Router();

  bestbuy(app);
  item(app);

  return app;
};
