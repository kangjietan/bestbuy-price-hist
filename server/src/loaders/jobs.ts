import { updatePrices } from "../jobs";

export default async function startJobs() {
  const updatePricesTask = await updatePrices();

  return {
    updatePricesTask,
  };
}
