import styled from "styled-components";

import MuiContainer from "@mui/material/Container";
import MuiPagination from "@mui/material/Pagination";
import Stack from '@mui/material/Stack';

export const Container = styled(MuiContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
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

export const ListContainer = styled(Stack)``;
