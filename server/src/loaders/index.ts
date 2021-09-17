import expressLoader from "./express";
import mongooseLoader from "./mongoose";

export default async ({ expressApp }) => {
  await mongooseLoader();
  console.log("Connected to database");
  await expressLoader({ app: expressApp });
};
