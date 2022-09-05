import styled from "styled-components";

import Card from "@mui/material/Card";
import { CircularProgress, Accordion as MuiAccordion, Typography } from "@mui/material";

interface CardContainerProps {
  centerElements?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 1s ease-in;
`;

export const CardContainer = styled(Card)<CardContainerProps>`
  display: flex;
  justify-content: ${props => props.centerElements ? "center" : "space-between"};
  align-items: center;
  flex-direction: column;
  transition: all 1s ease-in;
  width: 350px;
  height: 400px;
  padding: 10px;
  cursor: pointer;
`;

export const ProductName = styled.div`
  transition: all 0.2s ease-in;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Image = styled.img`
  object-fit: scale-down;
  width: 200px;
  height: 200px;
  transition: all 0.2s ease-in;
`;

export const ProductPrice = styled(Typography)``;

export const Loading = styled(CircularProgress)``;

export const Accordion = styled(MuiAccordion)`
  text-align: center;
  padding: 0.5rem;
  width: 100%;
`;

export const ProductNotSoldText = styled(Typography)``

export const GlassContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: all 1s ease-in;
  padding: 10px;
  cursor: pointer;
  width: 350px;
  height: 350px;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;
