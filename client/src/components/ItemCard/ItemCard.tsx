import React, { useState } from "react";

import { useFetchBestBuyProductInfoQuery } from "../../services/bestBuy";
import { Item } from "../../interfaces";
import {
  CardContainer,
  Image,
  ProductName,
  GlassContainer,
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

  if (data) {
    return (
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
          <ProductPrice>{`$${data.salePrice}`}</ProductPrice>
          <ProductPrice>{`List Price: $${data.regularPrice}`}</ProductPrice>
        </Accordion>
      </CardContainer>
    );
  }

  return (
    <CardContainer centerElements>
      {!isLoading ? (
        <ProductNotSoldText>
          This item is no longer being sold.
        </ProductNotSoldText>
      ) : (
        <Loading />
      )}
    </CardContainer>
  );
};

export default ItemCard;
