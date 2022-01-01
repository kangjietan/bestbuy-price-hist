import React from "react";

import ItemCard from "../ItemCard/ItemCard";

import { Container } from "./styles";

import { Item } from "../../interfaces";

interface ListProps {
  list: Item[];
}

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <Container>
      {list.map((item) => (
        <ItemCard item={item} />
      ))}
    </Container>
  );
};

export default List;
