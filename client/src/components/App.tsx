import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import List from "./List/List";

import GlobalStyle from "../theme/GlobalStyle";

import { useFetchAllItemsQuery } from "../services/item";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, CategoryScale);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const App: React.FC = () => {
  const { data: list = [], error, isLoading } = useFetchAllItemsQuery();

  return (
    <Container>
      <GlobalStyle />
      <Navbar></Navbar>
      <List list={list} />
    </Container>
  );
};

export default App;
