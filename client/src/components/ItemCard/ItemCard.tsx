import React from "react";

import { useFetchBestBuyProductInfoQuery } from "../../services/bestBuy";
import { Item } from "../../interfaces";
import { Container, Image } from "./styles";

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { sku } = item;
  const { data, error, isLoading } = useFetchBestBuyProductInfoQuery(sku);
  if (data) {
    return (
      <Container>
        <Image src={data.image} />
      </Container>
    );
  }

  return <Container>{isLoading}</Container>;
};

export default ItemCard;
