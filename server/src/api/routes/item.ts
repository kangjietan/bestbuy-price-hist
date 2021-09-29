import { Router, Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { fetchAllItems } from "../../services/item";
import { fetchAllPriceRecordsBySku } from "../../services/price";

const route = Router();

export default (app: Router) => {
  app.use("/item", route);

  route.get(
    "/list",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const items = await fetchAllItems();

        if (items.length === 0) {
          next(createError(404, "No items found in the list."));
        }

        res.json(items);
      } catch (error) {
        console.log(error);
      }
    }
  );

  route.get(
    "/prices/:sku",
    async (req: Request, res: Response, next: NextFunction) => {
      const { sku } = req.params;

      const prices = await fetchAllPriceRecordsBySku(Number(sku));

      if (prices.length === 0) {
        next(createError(404, "No records for item found."));
      }

      res.json(prices);
    }
  );
};
