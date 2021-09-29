import { addItem } from "../services/item";

import { RateLimiter } from "limiter";

const list = [
  6440334, 6418597, 6414194, 6469656, 4505300, 6420879, 5706659, 6084400,
  6431697, 6431696, 6458712, 6405291, 6457353, 6447772, 6360853, 6416347,
  6333841, 6455865, 6341988, 6215925, 6406940, 6438287, 6404863, 6421623,
  6121406, 6452221, 4895506, 6438943, 6439000, 5969508, 6229601, 6356983,
  6452222, 6438942, 6364255, 6364253, 6180807, 6293716, 6259804, 4901816,
  6471291, 6321794, 4758301, 6420125, 6451081, 6437477, 6333840, 6333839,
];

const seed = async () => {
  const limiter = new RateLimiter({ tokensPerInterval: 4, interval: "second" });

  for (let i = 0; i < list.length; i++) {
    const remainingRequests = await limiter.removeTokens(1);

    await sendRequest(remainingRequests, list[i]);

    console.log(`Inserted Item ${i + 1}`);
  }
};

async function sendRequest(remaining, sku) {
  await addItem(sku);
}

export default seed;
