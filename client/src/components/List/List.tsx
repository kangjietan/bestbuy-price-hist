import React from "react";

import { Container } from "./styles";

import { Item } from "../../interfaces";

interface ListProps {
  list: Item[];
}

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <Container>
      {list.map((item) => (
        <div>{item.sku}</div>
      ))}
    </Container>
  );
};

export default List;
