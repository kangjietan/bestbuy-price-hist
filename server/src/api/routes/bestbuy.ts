import { Router, Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { fetchProduct } from "../../bestbuyapi";

const route = Router();

export default (app: Router) => {
  app.use("/bestbuy", route);

  route.get(
    "/product/:sku",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { sku } = req.params;
        
        const product = await fetchProduct(Number(sku));

        if (!product) {
          next(createError(404, "No product with sku found."));
        }

        res.json(product);
      } catch (error) {
        console.log(error);
      }
    }
  );
};
