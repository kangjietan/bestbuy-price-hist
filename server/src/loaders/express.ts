import { Application, urlencoded, json } from "express";
import cors from "cors";
import morgan from "morgan";
import config from "@/config";
import routes from "@/api";

export default ({ app }: { app: Application }) => {
  app.enable("trust proxy");
  app.use(urlencoded({ extended: false }));
  app.use(json());
  app.use(cors());
  app.use(morgan("dev"));
  app.use(config.api.prefix, routes());
};
