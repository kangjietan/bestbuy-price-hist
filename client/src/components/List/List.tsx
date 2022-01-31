import React, { useState } from "react";

import ItemCard from "../ItemCard/ItemCard";

import Stack from "@mui/material/Stack";
import { Container, Pagination } from "./styles";

import { Item } from "../../interfaces";

interface ListProps {
  list: Item[];
}

const List: React.FC<ListProps> = ({ list }) => {
  const [page, setPage] = useState(1);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  const listStart = (page - 1) * 10;
  const listEnd = page * 10;
  console.log(listStart, listEnd);
  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        {list && (
          <Pagination
            size="large"
            shape="rounded"
            count={Math.ceil(list.length / 10)}
            onChange={handlePageChange}
          />
        )}
        {list.slice(listStart, listEnd).map((item) => (
          <ItemCard item={item} />
        ))}
      </Stack>
    </Container>
  );
};

export default List;
