export default interface Item {
  sku: number;
  currentPrice: number;
  priceUpdatedAt: Date;
  historicalLowPrice: number;
  historicalLowPriceDate: Date;
  historicalHighPrice: number;
  historicalHighPriceDate: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
