import { Router } from "express";
import bestbuy from "./routes/bestbuy";

export default () => {
  const app = Router();

  bestbuy(app);

  return app;
};
