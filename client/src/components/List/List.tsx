import React, { useState } from "react";

import ItemCard from "../ItemCard/ItemCard";

import Stack from "@mui/material/Stack";
import { Container, Pagination, ListContainer, Modal } from "./styles";

import { Item } from "../../interfaces";
import { useAppSelector } from "../../app/hooks";
import ProductModalContent from "../ProductModal/ProductModalContent";

interface ListProps {
  list: Item[];
}

const List: React.FC<ListProps> = ({ list }) => {
  const itemsPerPage = 12;
  const selectedProduct = useAppSelector(
    (state) => state.modal.selectedProduct
  );
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const listStart = (page - 1) * itemsPerPage;
  const listEnd = page * itemsPerPage;
  return (
    <Container maxWidth="xl">
      <Modal open={open} onClose={handleClose}>
        <ProductModalContent
          handleOpen={handleOpen}
          handleClose={handleClose}
          selectedProduct={selectedProduct}
          open={open}
        />
      </Modal>
      <Stack spacing={5}>
        <ListContainer
          direction={{ xs: "column", md: "row" }}
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          gap="1rem"
        >
          {list.slice(listStart, listEnd).map((item) => (
            <ItemCard item={item} key={item.sku} openModal={handleOpen} />
          ))}
        </ListContainer>
        {list && (
          <Pagination
            size="large"
            shape="rounded"
            count={Math.ceil(list.length / itemsPerPage)}
            onChange={handlePageChange}
          />
        )}
      </Stack>
    </Container>
  );
};

export default List;
