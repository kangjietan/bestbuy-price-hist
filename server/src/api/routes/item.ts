import { Router, Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { fetchAllItems } from "../../services/item";

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
};
