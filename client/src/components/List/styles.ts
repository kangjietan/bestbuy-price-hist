import styled from "styled-components";

import { Modal as MuiModal, Container as MuiContainer, Pagination as MuiPagination, Stack } from "@mui/material";

export const Container = styled(MuiContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const Pagination = styled(MuiPagination)`
  display: flex;
  justify-content: center;
  align-items: center;

  .MuiPagination-ul {
    background-color: white;
    padding: 10px;
    border-radius: 4px;
  }
`;

export const ListContainer = styled(Stack)`
`;

export const Modal = styled(MuiModal)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
