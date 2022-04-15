import React, { useState } from "react";

import { useFetchBestBuyProductInfoQuery } from "../../services/bestBuy";
import { Item } from "../../interfaces";
import { CardContainer, Image, ProductName, Container } from "./styles";

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { sku } = item;
  const { data, error, isLoading } = useFetchBestBuyProductInfoQuery(sku);
  const [hoverShadow, setHoverShadow] = useState(2);
  if (data) {
    return (
      <Container>
        <CardContainer
          sx={{ boxShadow: hoverShadow, bgcolor: "white" }}
          onMouseEnter={() => setHoverShadow(3)}
          onMouseLeave={() => setHoverShadow(2)}
        >
          <ProductName>{data.name}</ProductName>
          <Image src={data.image} />
        </CardContainer>
      </Container>
    );
    // return data.image ? (
    //   <Container>
    //     <CardContainer
    //       sx={{ boxShadow: hoverShadow, bgcolor: "white" }}
    //       onMouseEnter={() => setHoverShadow(3)}
    //       onMouseLeave={() => setHoverShadow(2)}
    //     >
    //       <ProductName>{data.name}</ProductName>
    //       <Image src={data.image} />
    //     </CardContainer>
    //   </Container>
    // ) : (
    //   <Container>No image for this item. {data.name}</Container>
    // );
  }

  return !isLoading ? (
    <Container>
      <CardContainer>
        <p>This item is no longer being sold</p>
      </CardContainer>
    </Container>
  ) : null;
};

export default ItemCard;
