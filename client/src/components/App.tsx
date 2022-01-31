import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import List from "./List/List";

import GlobalStyle from "../theme/GlobalStyle";

import { useFetchAllItemsQuery } from "../services/item";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 100px;
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
