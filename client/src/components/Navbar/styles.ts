import styled from "styled-components";

interface HeaderProps {
  direction: string;
}

export const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  height: 100px;
  background-color: var(--bg-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0px 50px;
  transition: all 0.4s;
  transform: ${(props: HeaderProps) =>
    props.direction === "up" ? "translateY(0)" : "translateY(-100px)"};
  visibility: ${(props: HeaderProps) =>
    props.direction === "up" ? "visible" : "hidden"};
`;

export const Navigation = styled.nav`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--text-color);
  z-index: 11;
  height: 100px;
`;
