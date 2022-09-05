import styled from "styled-components";

import { Container } from "@mui/material";

export const ModalContentContainer = styled(Container)`
  background-color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
`;
export const ModalContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ModalContentImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: scale-down;
`;

export const ModalContentName = styled.p``;

export const ModalContentGraphContainer = styled.div`
  /* width: 100%; */
`

export const ModalContentHistoricalsContainer = styled.div`
  
`;
