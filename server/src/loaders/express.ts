import { Application } from "express";
import cors from "cors";
import morgan from "morgan";

export default ({ app }: { app: Application }) => {
  app.enable("trust proxy");
  app.use(cors());
  app.use(morgan("tiny"));
};
