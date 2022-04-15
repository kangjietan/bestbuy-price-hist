import styled from "styled-components";

import Card from "@mui/material/Card";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 350px;
  cursor: pointer;
  transition: all 1s ease-in;
`;

export const CardContainer = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 1s ease-in;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const ProductName = styled.div`
  /* height: 0; */
  /* transform: scaleY(0); */
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

export const DropDownContainer = styled.div`
  
`
