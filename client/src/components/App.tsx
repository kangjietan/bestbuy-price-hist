import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";

import GlobalStyle from "../theme/GlobalStyle";

const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Navbar></Navbar>
    </Container>
  );
};

export default App;
