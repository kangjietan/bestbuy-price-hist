import { createGlobalStyle } from "styled-components";
import Sanitize from "./sanitize";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #182628;
    --secondary-color: #57BA98;
    --secondary-variant-color: #3B945E;
    --bg-color: #65CCB8;
    --text-color: #F2F2F2;
  }

  body {
    background-color: var(--bg-color);
  }

  ${Sanitize}
`;

export default GlobalStyle;
