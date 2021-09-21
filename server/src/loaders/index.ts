import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import jobsLoader from "./jobs";

export default async ({ expressApp }) => {
  await mongooseLoader();
  console.log("Connected to database");
  await expressLoader({ app: expressApp });
  console.log("Server started");
  await jobsLoader();
  console.log("Jobs scheduled");
};
