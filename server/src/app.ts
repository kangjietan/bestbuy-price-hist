import config from "./config";

import express from "express";

async function startServer() {
  const app = express();

  await require("./loaders").default({ expressApp: app });

  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
  });
}

startServer();
