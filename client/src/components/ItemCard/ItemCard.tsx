import React, { useState } from "react";

import { useFetchBestBuyProductInfoQuery } from "../../services/bestBuy";
import { Item } from "../../interfaces";
import {
  CardContainer,
  Image,
  ProductName,
  Loading,
  ProductPrice,
  Accordion,
  ProductNotSoldText,
} from "./styles";
import { setCurrentProduct } from "../../features/modal/modalSlice";
import { useAppDispatch } from "../../app/hooks";

interface ItemCardProps {
  item: Item;
  openModal: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, openModal }) => {
  const { sku } = item;
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useFetchBestBuyProductInfoQuery(sku);
  const [hoverShadow, setHoverShadow] = useState(2);
  const [showRegularPrice, setShowRegularPrice] = useState(false);

  return data ? (
    <CardContainer
      sx={{ boxShadow: hoverShadow, bgcolor: "white" }}
      onMouseEnter={() => {
        setHoverShadow(3);
        setShowRegularPrice(true);
      }}
      onMouseLeave={() => {
        setHoverShadow(1);
        setShowRegularPrice(false);
      }}
      onClick={() => {
        dispatch(setCurrentProduct(data));
        openModal();
      }}
    >
      <ProductName>{data.name}</ProductName>
      <Image src={data.image} />
      <Accordion expanded={showRegularPrice}>
        <ProductPrice
          variant="h6"
          sx={{ color: "var(--secondary-color)" }}
        >{`$${data.salePrice}`}</ProductPrice>
        <ProductPrice>{`List Price: $${data.regularPrice}`}</ProductPrice>
      </Accordion>
    </CardContainer>
  ) : (
    <CardContainer centerElements>
      {!isLoading ? (
        <ProductNotSoldText>
          {error || `Failed to retrieve information for ${sku}.`}
        </ProductNotSoldText>
      ) : (
        <Loading />
      )}
    </CardContainer>
  );
};

export default ItemCard;
