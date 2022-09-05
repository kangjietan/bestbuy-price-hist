import styled from "styled-components";

import { Container } from "@mui/material";

export const ModalContentContainer = styled(Container)`
  background-color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
`;

export const ModalContentCloseLeftLine = styled.div`
  height: 4px;
  width: 25px;
  position: absolute;
  margin-top: 24px;
  background-color: var(--secondary-color);
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all 0.3s ease-in;
  cursor: pointer;
`;
export const ModalContentCloseRightLine = styled.div`
  height: 4px;
  width: 25px;
  position: absolute;
  margin-top: 24px;
  background-color: var(--secondary-color);
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all 0.3s ease-in;
  cursor: pointer;
`;

export const ModalContentCloseButtonContainer = styled.div`
  width: 25px;
  align-self: start;

  &:hover ${ModalContentCloseLeftLine} {
    transform: rotate(-45deg);
    background-color: var(--secondary-variant-color);
  }
  &:hover ${ModalContentCloseRightLine} {
    transform: rotate(45deg);
    background-color: var(--secondary-variant-color);
  }
`;

export const ModalContentHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ModalContentAnchor = styled.a`
  text-decoration: none;
  color: black;
`;

export const ModalContentImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: scale-down;
`;

export const ModalContentName = styled.p`
  margin: 0;
  font-weight: 600;
`;

export const ModalContentGraphContainer = styled.div`
  /* width: 100%; */
`;

export const ModalContentHistoricalsContainer = styled.div``;
