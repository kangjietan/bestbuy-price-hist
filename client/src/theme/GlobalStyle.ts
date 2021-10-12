import { createGlobalStyle } from "styled-components";
import Sanitize from "./sanitize";

const GlobalStyle = createGlobalStyle`
  ${Sanitize}
`;

export default GlobalStyle;
