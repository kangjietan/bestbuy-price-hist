import React, { useState } from "react";

import ItemCard from "../ItemCard/ItemCard";

import Stack from "@mui/material/Stack";
import { Container, Pagination, ListContainer } from "./styles";

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
  const listStart = (page - 1) * 12;
  const listEnd = page * 12;
  return (
    <Container maxWidth="xl">
      <Stack spacing={5}>
        {list && (
          <Pagination
            size="large"
            shape="rounded"
            count={Math.ceil(list.length / 12)}
            onChange={handlePageChange}
          />
        )}
        <ListContainer
          direction={{ xs: "column", md: "row" }}
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          gap="1rem"
        >
          {list.slice(listStart, listEnd).map((item) => (
            <ItemCard item={item} />
          ))}
        </ListContainer>
      </Stack>
    </Container>
  );
};

export default List;
